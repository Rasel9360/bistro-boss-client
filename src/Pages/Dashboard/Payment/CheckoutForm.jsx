import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const { user } = useAuth();
    const [tnsId, setTnsId] = useState('')
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
            .catch(err => console.log(err))
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', card
        })

        if (error) {
            console.log("Payment error", error);
            setError(error.message)
        } else {
            console.log("Payment method", paymentMethod);
            setError('');
        }

        // confirm payment intent
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonyms',
                    email: user?.email || 'anonyms'
                }
            }
        })

        if (confirmError) {
            console.log("confirm error");
            setError(confirmError.message)
        }
        else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTnsId(paymentIntent.id)
            }
        }

        // now save the payments status
        const payment = {
            email: user?.email,
            price: totalPrice,
            date: new Date(), // convert utc formate,
            transactionId: paymentIntent.id,
            cartIds: cart.map(item => item._id),
            menuIds: cart.map(item => item.cartId)
        }

        const res = await axiosSecure.post('/payments', payment);
        console.log(res.data);
        if (res.data.paymentResult.insertedId) {
            toast.success('Payment successful')
            navigate('/dashboard/paymentHistory')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm bg-[#D1A054] text-white text-lg mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {tnsId && <p className="text-green-600">{tnsId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;