const termsOfService = {
  en: `
    <h1>Terms of Service for the Poneglyph Discord Bot</h1>
    <h2>1. Acceptance of Terms of Service</h2>
    <p>By using our Discord Bot, you are accepting these Terms of Service. If you do not agree with these terms, please do not use the bot.</p>
    <h2>2. Service Description</h2>
    <p>The bot provides information about the MMORPG set in the world of One Piece called Grand Line Adventures, a fan-made game. All information from the bot is taken from this game. The bot's commands are mainly to gather useful information to help community members who play and anyone who is interested.</p>
    <h2>3. Appropriate Use</h2>
    <p>Appropriate use should only be for information. It is forbidden to use the bot for any illegal, offensive, defamatory, invasive of another person's privacy, or harmful purpose in any way.</p>
    <h2>4. Modifications</h2>
    <p>The terms may change at any time. We recommend that you regularly review these Terms of Service.</p>
    <h2>5. Limitation of Liability</h2>
    <p>The bot does not guarantee any 100% accurate information, but the focus is always to keep it updated. In case of doubts, access Discord or check the bot's profile where it says the last update.</p>
    <h2>6. Contact</h2>
    <p>If you have any questions about these Terms of Service, please contact us through <a href="https://discord.gg/49SZdgvku4">Discord</a>.</p>
  `,
  pt: `
    <h1>Termos de Serviço do Bot Discord Poneglyph</h1>
    <h2>1. Aceitação dos Termos de Serviço</h2>
    <p>Ao utilizar o nosso Bot Discord, você está aceitando estes Termos de Serviço. Se você não concorda com estes termos, por favor, não utilize o bot.</p>
    <h2>2. Descrição do Serviço</h2>
    <p>O bot fornece informações sobre o MMORPG ambientado no mundo de One Piece chamado Grand Line Adventures, um jogo feito por fãs. Todas as informações do bot são retiradas deste jogo. Os comandos do bot são principalmente para reunir informações úteis para ajudar os membros da comunidade que jogam e qualquer pessoa interessada.</p>
    <h2>3. Uso Apropriado</h2>
    <p>O uso apropriado deve ser apenas para informações. É proibido usar o bot para qualquer propósito ilegal, ofensivo, difamatório, invasivo da privacidade de outra pessoa, ou prejudicial de qualquer forma.</p>
    <h2>4. Modificações</h2>
    <p>Os termos podem mudar a qualquer momento. Recomendamos que você revise regularmente estes Termos de Serviço.</p>
    <h2>5. Limitação de Responsabilidade</h2>
    <p>O bot não garante qualquer informação 100% precisa, mas o foco é sempre mantê-lo atualizado. Em caso de dúvidas, acesse o Discord ou verifique o perfil do bot onde diz a última atualização.</p>
    <h2>6. Contato</h2>
    <p>Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco através do <a href="https://discord.gg/49SZdgvku4">Discord</a>.</p>
  `
};

function changeLanguage() {
  const language = document.getElementById('language').value;
  document.getElementById('content').innerHTML = termsOfService[language];
}

// Carrega o conteúdo inicial em inglês
document.addEventListener("DOMContentLoaded", function() {
  changeLanguage();
});
