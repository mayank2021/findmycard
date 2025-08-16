import { useFormContext } from "../contexts";
import { FormData } from "../components/MultiStepForm/types";

export const useFormData = () => {
  const context = useFormContext();

  // Helper function to get form data for a specific step
  const getStepData = (step: number): Partial<FormData> => {
    switch (step) {
      case 1: // Basic Info
        return {
          fullName: context.formData.fullName,
          email: context.formData.email,
          phone: context.formData.phone,
          monthlySpend: context.formData.monthlySpend,
        };
      case 2: // Online/Ecommerce spend
        return {
          ecommerseSpend: context.formData.ecommerseSpend,
          amazon: context.formData.amazon,
          flipkart: context.formData.flipkart,
          tataNeu: context.formData.tataNeu,
          myntra: context.formData.myntra,
          bigBasket: context.formData.bigBasket,
          blinkIt: context.formData.blinkIt,
          ecommerseOthers: context.formData.ecommerseOthers,
        };
      case 3: // Travel spend
        return {
          travelSpend: context.formData.travelSpend,
          makeMyTrip: context.formData.makeMyTrip,
          irctc: context.formData.irctc,
          vistara: context.formData.vistara,
          airIndia: context.formData.airIndia,
          indigo: context.formData.indigo,
          easeMyTrip: context.formData.easeMyTrip,
          ola: context.formData.ola,
          uber: context.formData.uber,
          offlineTravelSpend: context.formData.offlineTravelSpend,
        };
      case 4: // Dining & movie spend
        return {
          diningSpend: context.formData.diningSpend,
          zomato: context.formData.zomato,
          swiggy: context.formData.swiggy,
          eazyDiner: context.formData.eazyDiner,
          movieSpend: context.formData.movieSpend,
          pvr: context.formData.pvr,
          bookMyShow: context.formData.bookMyShow,
        };
      case 5: // Miscellaneous spend
        return {
          luxurySpend: context.formData.luxurySpend,
          offlineApparelFashion: context.formData.offlineApparelFashion,
          departmentalStoresSupermarket: context.formData.departmentalStoresSupermarket,
          hotelsAndHolidays: context.formData.hotelsAndHolidays,
          fuel: context.formData.fuel,
          utility: context.formData.utility,
          foreignCurrencyTransaction: context.formData.foreignCurrencyTransaction,
          otherSpends: context.formData.otherSpends,
        };
      default:
        return {};
    }
  };

  // Helper function to check if a step is complete
  const isStepComplete = (step: number): boolean => {
    const stepData = getStepData(step);
    return Object.values(stepData).every(value => value && value.trim() !== "");
  };

  // Helper function to get total form completion percentage
  const getFormCompletion = (): number => {
    const totalFields = Object.keys(context.formData).length;
    const filledFields = Object.values(context.formData).filter(value => value && value.trim() !== "").length;
    return Math.round((filledFields / totalFields) * 100);
  };

  // Helper function to check if form is ready for submission
  const isFormReadyForSubmission = (): boolean => {
    return getFormCompletion() === 100;
  };

  // Helper function to get summary of form data
  const getFormSummary = () => {
    const summary = {
      personalInfo: {
        name: context.formData.fullName,
        email: context.formData.email,
        phone: context.formData.phone,
        monthlySpend: context.formData.monthlySpend,
      },
      ecommerce: {
        total: context.formData.ecommerseSpend,
        platforms: {
          amazon: context.formData.amazon,
          flipkart: context.formData.flipkart,
          tataNeu: context.formData.tataNeu,
          myntra: context.formData.myntra,
          bigBasket: context.formData.bigBasket,
          blinkIt: context.formData.blinkIt,
          others: context.formData.ecommerseOthers,
        },
      },
      travel: {
        total: context.formData.travelSpend,
        platforms: {
          makeMyTrip: context.formData.makeMyTrip,
          irctc: context.formData.irctc,
          vistara: context.formData.vistara,
          airIndia: context.formData.airIndia,
          indigo: context.formData.indigo,
          easeMyTrip: context.formData.easeMyTrip,
          ola: context.formData.ola,
          uber: context.formData.uber,
          offline: context.formData.offlineTravelSpend,
        },
      },
      dining: {
        total: context.formData.diningSpend,
        platforms: {
          zomato: context.formData.zomato,
          swiggy: context.formData.swiggy,
          eazyDiner: context.formData.eazyDiner,
        },
      },
      entertainment: {
        movieSpend: context.formData.movieSpend,
        pvr: context.formData.pvr,
        bookMyShow: context.formData.bookMyShow,
      },
      miscellaneous: {
        luxury: context.formData.luxurySpend,
        apparel: context.formData.offlineApparelFashion,
        stores: context.formData.departmentalStoresSupermarket,
        hotels: context.formData.hotelsAndHolidays,
        fuel: context.formData.fuel,
        utility: context.formData.utility,
        foreignCurrency: context.formData.foreignCurrencyTransaction,
        others: context.formData.otherSpends,
      },
    };

    return summary;
  };

  return {
    ...context,
    getStepData,
    isStepComplete,
    getFormCompletion,
    isFormReadyForSubmission,
    getFormSummary,
  };
};
