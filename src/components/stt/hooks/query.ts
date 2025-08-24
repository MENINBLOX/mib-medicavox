import { useMutation } from '@tanstack/react-query';
import { AppLanguage, getLanguageCode } from '../../language/store';

export const useStartSttAgent = () => {
  return useMutation({
    mutationFn: async (language: AppLanguage) => {
      const languageCode = getLanguageCode(language);

      return fetch('/api/stt/start', {
        method: 'POST',
        body: JSON.stringify({ language: languageCode }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('========result======');
          console.log(data);
          return data;
        });
    },
  });
};

export const useStopSttAgent = () => {};

export const useQuerySttAgentStatus = () => {};
