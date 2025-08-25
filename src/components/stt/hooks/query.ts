import { useMutation, useQuery } from '@tanstack/react-query';
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

export const useQuerySttAgentStatus = (agentId: string | null) => {
  return useQuery({
    queryKey: ['stt-agent-status', agentId],
    queryFn: async () => {
      return fetch(`/api/stt/status?agentId=${agentId}`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    },
    enabled: !!agentId,
  });
};
