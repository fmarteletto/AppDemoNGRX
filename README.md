# AppDemoNGRX
Aplicativo simples de demonstração de utilização da biblioteca NGRX


Por que usar o NgRx Store para gerenciamento de estado?
O NgRx Store fornece gerenciamento de estado para criar aplicativos explícitos e passíveis de manutenção por meio do uso de estado único e ações para expressar mudanças de estado

# Ações (Action)
As ações são um dos principais blocos de construção do NgRx. As ações expressam eventos exclusivos que acontecem em todo o seu aplicativo. Desde a interação do usuário com a página, interação externa por meio de solicitações de rede e interação direta com as APIs do dispositivo, esses e mais eventos são descritos com ações.

# Redutores (Reducer)
Os redutores no NgRx são responsáveis ​​por manipular as transições de um estado para o próximo estado em sua aplicação. As funções redutoras lidam com essas transições determinando quais ações devem ser tratadas com base no tipo de ação.
Seletores (Selector)
Seletores são funções puras usadas para obter fatias do estado do Store

# Efeitos (Effects)
Os efeitos são um modelo de efeito colateral alimentado por RxJS para Store . Os efeitos usam fluxos para fornecer novas fontes de ações para reduzir o estado com base em interações externas, como solicitações de rede (Dados externos).