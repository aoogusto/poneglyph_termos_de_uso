const termsOfService = {
  en: `
    <h1>Terms of Service for the Poneglyph Discord Bot</h1>
    <h2><i class="fas fa-info-circle"></i> 1. Acceptance of Terms of Service</h2>
    <p>By using the Poneglyph bot, you agree to these Terms of Service. If you do not agree with any part of the terms, please discontinue use of the bot immediately.</p>
    <h2><i class="fas fa-cogs"></i> 2. Service Description</h2>
    <p>Poneglyph is a utility bot developed to provide information related to the MMORPG Grand Line Adventures (GLA), a fan-made game set in the One Piece universe. The bot is designed to facilitate access to useful data, aiding players and community members of GLA. All information provided by the bot is sourced directly from the game or associated sources.</p>
    <h2><i class="fas fa-edit"></i> 3. Modifications to the Terms</h2>
    <p>These Terms of Service may be modified at any time without prior notice. It is the user's responsibility to review the terms periodically to stay informed about any changes. Continued use of the bot after the modification of the terms implies acceptance of the new conditions.</p>
    <h2><i class="fas fa-exclamation-triangle"></i> 4. Limitation of Liability</h2>
    <p>Poneglyph strives to provide accurate and up-to-date information, but there is no guarantee that all information is completely correct or current. The use of the information provided by the bot is the sole responsibility of the user. In case of doubt or to verify the latest update, we recommend accessing the bot's profile or the support channel on Discord.</p>
  `,
  pt: `
    <h1>Termos de Serviço do Bot Discord Poneglyph</h1>
    <h2><i class="fas fa-info-circle"></i> 1. Aceitação dos Termos de Serviço</h2>
    <p>Ao utilizar o bot Poneglyph, você concorda com estes Termos de Serviço. Caso não concorde com qualquer parte dos termos, solicitamos que interrompa imediatamente o uso do bot.</p>
    <h2><i class="fas fa-cogs"></i> 2. Descrição do Serviço</h2>
    <p>O Poneglyph é um bot de utilidade desenvolvido para fornecer informações relacionadas ao MMORPG Grand Line Adventures (GLA), um jogo ambientado no universo de One Piece, criado por fãs. O bot é projetado para facilitar o acesso a dados úteis, auxiliando jogadores e membros da comunidade de GLA. Todas as informações fornecidas pelo bot são extraídas diretamente do jogo ou de fontes associadas.</p>
    <h2><i class="fas fa-edit"></i> 3. Modificações nos Termos</h2>
    <p>Estes Termos de Serviço podem ser alterados a qualquer momento, sem aviso prévio. É responsabilidade do usuário revisar periodicamente os termos para se manter informado sobre possíveis mudanças. O uso continuado do bot após a modificação dos termos implicará na aceitação das novas condições.</p>
    <h2><i class="fas fa-exclamation-triangle"></i> 4. Limitação de Responsabilidade</h2>
    <p>O Poneglyph se esforça para fornecer informações precisas e atualizadas, porém, não há garantia de que todas as informações estejam completamente corretas ou atualizadas. O uso das informações fornecidas pelo bot é de responsabilidade exclusiva do usuário. Em caso de dúvidas ou para verificar a última atualização, recomendamos que acesse o perfil do bot ou o canal de suporte no Discord.</p>
  `,
  es: `
    <h1>Términos de Servicio del Bot de Discord Poneglyph</h1>
    <h2><i class="fas fa-info-circle"></i> 1. Aceptación de los Términos de Servicio</h2>
    <p>Al utilizar el bot Poneglyph, usted acepta estos Términos de Servicio. Si no está de acuerdo con alguna parte de los términos, le solicitamos que deje de usar el bot de inmediato.</p>
    <h2><i class="fas fa-cogs"></i> 2. Descripción del Servicio</h2>
    <p>Poneglyph es un bot de utilidad desarrollado para proporcionar información relacionada con el MMORPG Grand Line Adventures (GLA), un juego hecho por fanáticos ambientado en el universo de One Piece. El bot está diseñado para facilitar el acceso a datos útiles, ayudando a los jugadores y miembros de la comunidad de GLA. Toda la información proporcionada por el bot se obtiene directamente del juego o de fuentes asociadas.</p>
    <h2><i class="fas fa-edit"></i> 3. Modificaciones de los Términos</h2>
    <p>Estos Términos de Servicio pueden ser modificados en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar los términos periódicamente para mantenerse informado sobre cualquier cambio. El uso continuo del bot después de la modificación de los términos implica la aceptación de las nuevas condiciones.</p>
    <h2><i class="fas fa-exclamation-triangle"></i> 4. Limitación de Responsabilidad</h2>
    <p>Poneglyph se esfuerza por proporcionar información precisa y actualizada, pero no hay garantía de que toda la información sea completamente correcta o actual. El uso de la información proporcionada por el bot es responsabilidad exclusiva del usuario. En caso de duda o para verificar la última actualización, recomendamos acceder al perfil del bot o al canal de soporte en Discord.</p>
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
