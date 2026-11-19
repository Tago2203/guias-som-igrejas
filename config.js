// Configuracao da pagina de vendas (unico lugar para ligar o botao de compra e o rastreamento).
// A pagina esta em RASCUNHO: o botao nao leva a lugar nenhum enquanto checkoutUrl estiver vazio.
window.OFERTA = {
  rascunho: true,            // true = mostra a faixa "rascunho" com as pendencias e nao dispara nada. Trocar para false so com OK da dona.
  nome: "Pacote 7 guias Mestre do Som T.O.G",
  preco: 39.9,               // oferta aprovada pela dona em 18/11/2026 (teste). Nenhum preco foi alterado na Hotmart.
  precoSeparado: 80.5,       // soma dos 5 guias vendidos separadamente (precos de 03-04/11; reconferir na Hotmart antes de publicar)
  mostrarAncora: true,
  checkoutUrl: "https://pay.hotmart.com/K108561502Y?off=0f5ksbrd",           // COLAR AQUI o link do checkout da oferta de 7 guias (Hotmart). Vazio = botao em modo rascunho.
  utm: { passar: true, params: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "src"] },
  pixel: { ativo: false, id: "1139067038607155", eventoClique: "ClicouComprar" },   // Pixel Meta ja existente. Ligar (ativo: true) so na publicacao. eventoClique: evento proprio no clique de comprar, para NAO repetir o InitiateCheckout que a Hotmart ja manda quando o checkout abre.
  garantiaDias: 7,           // garantia da Hotmart (registro de 03/11; reconferir antes de publicar)
  pagamentos: "Pix, cartão em até 3x (com acréscimo), boleto e PayPal",   // lido no checkout do Mapa em 18/11; confirmar no checkout da oferta nova
  guias: [
    { n: 1, titulo: "Mapa de Diagnóstico Sonoro", paginas: 13, bonus: false, texto: "Descubra em qual faixa de frequência está o problema antes de mexer na mesa." },
    { n: 2, titulo: "Guia dos Erros que Pioram o Som", paginas: 21, bonus: false, texto: "18 erros comuns de operação, cada um com o jeito errado e o jeito certo." },
    { n: 3, titulo: "Guia da Equalização Evangélica", paginas: 28, bonus: false, texto: "Equalização prática para voz, banda e culto, instrumento por instrumento." },
    { n: 6, titulo: "Guia de Posicionamento de Microfones", paginas: 35, bonus: false, texto: "Onde e como colocar cada microfone: voz, fala, bateria e instrumentos." },
    { n: 7, titulo: "Manual do Som para Igrejas com Equipamento Simples", paginas: 27, bonus: false, texto: "Tire o melhor som do que a sua igreja já tem, em 25 passos." },
    { n: 4, titulo: "Guia de Acústica sem Reforma", paginas: 30, bonus: true, texto: "Som mais claro com ajustes simples no ambiente, sem obra." },
    { n: 5, titulo: "Guia de Adaptação para Diferentes Cultos", paginas: 29, bonus: true, texto: "O erro comum e o ajuste certo para cada tipo de culto e ambiente." }
  ],
  pendenciasRascunho: [
    "Produto 'Pacote 7 Guias' (ID 9011998) aprovado na Hotmart, com vendas ativas e checkout funcionando; a página continua em rascunho até a aprovação de publicar",
    "Marca de DRM do comprador (rodapé): não dá para ver na prévia do produtor; conferir na primeira compra real",
    "Pixel desligado e página em rascunho: publicar e ligar o pixel só com aprovação",
    "Hospedagem: repositório separado no GitHub Pages (endereço provisório), ainda privado e sem o Pages ligado",
    "Contato de privacidade ainda não informado (campo {{CONTATO}} da política)"
  ]
};
