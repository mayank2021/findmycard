import { FormData, FormErrors } from "./types";

export const validateStep = (
  step: number,
  formData: FormData,
  optionals?: string[]
): FormErrors => {
  const errors: FormErrors = {};

  switch (step) {
    case 1:
      if (!formData.fullName.trim()) {
        errors.fullName = "Name is required";
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Invalid email format";
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
      }
      if (
        !optionals?.includes("monthlySpend") &&
        !formData.monthlySpend.trim()
      ) {
        errors.monthlySpend = "Monthly spend is required";
      }
      break;
    // case 2:
    //   // Require either aggregate ecommerce spend or at least one detailed field
    //   const hasAggregate = !!formData.ecommerseSpend.trim();
    //   const hasAnyDetail =
    //     !!formData.amazon?.trim() ||
    //     !!formData.flipkart?.trim() ||
    //     !!formData.tataNeu?.trim() ||
    //     !!formData.myntra?.trim() ||
    //     !!formData.bigBasket?.trim() ||
    //     !!formData.blinkIt?.trim() ||
    //     !!formData.others?.trim();
    //   if (!hasAggregate && !hasAnyDetail) {
    //     errors.ecommerseSpend =
    //       "Provide total ecommerce spend or fill any detailed field";
    //   }
    //   break;
    // case 3:
    //   // Require either aggregate travel spend or at least one detailed field
    //   {
    //     const hasAggregate = !!formData.travelSpend?.trim();
    //     const hasAnyDetail =
    //       !!formData.makeMyTrip?.trim() ||
    //       !!formData.irctc?.trim() ||
    //       !!formData.vistara?.trim() ||
    //       !!formData.airIndia?.trim() ||
    //       !!formData.indigo?.trim() ||
    //       !!formData.easeMyTrip?.trim() ||
    //       !!formData.offlineTravelSpend?.trim();
    //     if (!hasAggregate && !hasAnyDetail) {
    //       errors.travelSpend =
    //         "Provide total travel spend or fill any detailed field";
    //     }
    //   }
    //   break;
    // case 4:
    //   // Require either aggregate dining spend or at least one detailed field
    //   {
    //     const hasAggregate = !!formData.diningSpend?.trim();
    //     const hasAnyDetail =
    //       !!formData.zomato?.trim() ||
    //       !!formData.swiggy?.trim() ||
    //       !!formData.eazyDiner?.trim() ||
    //       !!formData.luxurySpend?.trim();
    //     if (!hasAggregate && !hasAnyDetail) {
    //       errors.diningSpend =
    //         "Provide total dining spend or fill any detailed field";
    //     }
    //   }
    //   break;
    case 5:
      // No hard validation for miscellaneous, but keep interface for future
      break;
  }

  return errors;
};
