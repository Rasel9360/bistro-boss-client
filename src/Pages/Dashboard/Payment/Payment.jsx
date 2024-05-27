import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Please payment your selected menu items"
                heading="Payment"
            ></SectionTitle>

            <div className="w-1/3 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;