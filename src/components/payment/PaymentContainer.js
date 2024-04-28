import SelectPaymentContainer from "./SelectPaymentContainer";
import AdditionalInfoContainer from "./AdditionalInfoContainer";
import "../../styles/payment/paymentContainer.css";
import { db } from "../../index";

function PaymentContainer({ props }) {
  console.log(props);
  return (
    <>
      <div className="payment-container">
        <div className="payment-column">
          <SelectPaymentContainer props={props} />
        </div>
        <div className="payment-column">
          <AdditionalInfoContainer props={props} />
        </div>
      </div>
    </>
  );
}
export default PaymentContainer;
