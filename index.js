const terms = {
  pt: `
      <h2>Termos de Serviço do Bot Discord Poneglyph</h2>
      <ol>
          <li><strong>Aceitação dos Termos de Serviço:</strong> Ao utilizar o bot Poneglyph, você concorda com estes Termos de Serviço. Caso não concorde com qualquer parte dos termos, solicitamos que interrompa imediatamente o uso do bot.</li>
          <li><strong>Descrição do Serviço:</strong> O Poneglyph é um bot de utilidade desenvolvido para fornecer informações relacionadas ao MMORPG Grand Line Adventures (GLA), um jogo ambientado no universo de One Piece, criado por fãs. O bot é projetado para facilitar o acesso a dados úteis, auxiliando jogadores e membros da comunidade de GLA. Todas as informações fornecidas pelo bot são extraídas diretamente do jogo ou de fontes associadas.</li>
          <li><strong>Modificações nos Termos:</strong> Estes Termos de Serviço podem ser alterados a qualquer momento, sem aviso prévio. É responsabilidade do usuário revisar periodicamente os termos para se manter informado sobre possíveis mudanças. O uso continuado do bot após a modificação dos termos implicará na aceitação das novas condições.</li>
          <li><strong>Limitação de Responsabilidade:</strong> O Poneglyph se esforça para fornecer informações precisas e atualizadas, porém, não há garantia de que todas as informações estejam completamente corretas ou atualizadas. O uso das informações fornecidas pelo bot é de responsabilidade exclusiva do usuário. Em caso de dúvidas ou para verificar a última atualização, recomendamos que acesse o perfil do bot ou o canal de suporte no Discord.</li>
      </ol>
  `,
  en: `
      <h2>Poneglyph Discord Bot Terms of Service</h2>
      <ol>
          <li><strong>Acceptance of Terms:</strong> By using the Poneglyph bot, you agree to these Terms of Service. If you do not agree with any part of the terms, please stop using the bot immediately.</li>
          <li><strong>Service Description:</strong> Poneglyph is a utility bot developed to provide information related to the MMORPG Grand Line Adventures (GLA), a fan-made game set in the One Piece universe. The bot is designed to facilitate access to useful data, helping players and members of the GLA community. All information provided by the bot is directly extracted from the game or associated sources.</li>
          <li><strong>Changes to the Terms:</strong> These Terms of Service may be changed at any time without prior notice. It is the user's responsibility to periodically review the terms to stay informed about possible changes. Continued use of the bot after modification of the terms implies acceptance of the new conditions.</li>
          <li><strong>Limitation of Liability:</strong> Poneglyph strives to provide accurate and up-to-date information, but there is no guarantee that all information is completely correct or up-to-date. The use of information provided by the bot is at the user's own risk. If in doubt or to verify the latest update, we recommend that you visit the bot's profile or the support channel on Discord.</li>
      </ol>
  `,
  es: `
      <h2>Términos de Servicio del Bot de Discord Poneglyph</h2>
      <ol>
          <li><strong>Aceptación de los Términos:</strong> Al utilizar el bot Poneglyph, usted acepta estos Términos de Servicio. Si no está de acuerdo con alguna parte de los términos, por favor deje de usar el bot inmediatamente.</li>
          <li><strong>Descripción del Servicio:</strong> Poneglyph es un bot de utilidad desarrollado para proporcionar información relacionada con el MMORPG Grand Line Adventures (GLA), un juego creado por fans ambientado en el universo de One Piece. El bot está diseñado para facilitar el acceso a datos útiles, ayudando a jugadores y miembros de la comunidad de GLA. Toda la información proporcionada por el bot se extrae directamente del juego o de fuentes asociadas.</li>
          <li><strong>Cambios en los Términos:</strong> Estos Términos de Servicio pueden cambiarse en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar periódicamente los términos para mantenerse informado sobre posibles cambios. El uso continuado del bot después de la modificación de los términos implica la aceptación de las nuevas condiciones.</li>
          <li><strong>Limitación de Responsabilidad:</strong> Poneglyph se esfuerza por proporcionar información precisa y actualizada, pero no se garantiza que toda la información sea completamente correcta o actualizada. El
uso de la información proporcionada por el bot es responsabilidad exclusiva del usuario. En caso de dudas o para verificar la última actualización, le recomendamos que visite el perfil del bot o el canal de soporte en Discord.</li>
        </ol>
    `
};

function changeLanguage() {
  const language = document.getElementById('language').value;
  document.getElementById('terms').innerHTML = terms[language];
}

// Set default language to Portuguese on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('terms').innerHTML = terms['pt'];
});
