import messages_en_np from "./translations/en-np.json";
import messages_np from "./translations/np.json";

const DEFAULT_CONFIG = {
  translations: [
    { key: "en", messages: messages_en_np },
    { key: "np", messages: messages_np },
  ],
};

export const NepalLanguagePackModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
