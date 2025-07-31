            // <div class="section-content home-content">
            //     <h1 class="section-title">Bem vindo à Maxlimp Rio</h1>
            //     <p class="section-description">Sua solução em produtos de Limpeza e Higiene.</p>
            //     <a href="#s-contact" class="btn btn-primary">Fale Conosco</a>
    const homeContent = {
        title: "Bem-vindo à ",
        stilizedCName: "Maxlimp",
        stilizedCSubname: "Rio",
        description: "Sua solução em produtos de Limpeza e Higiene.",
        buttonText: "FALE COM UM VENDEDOR",
        buttonLink: "#s-contact" 
    }

    function renderHomeSection() {
        const homeSectionElement = $("#s-home");

        const textButtonBlock = $("<div>");
        textButtonBlock.addClass("s-home-text-button-block");

        const hstitleElement = $("<h1>");
        hstitleElement.text(homeContent.title);
        
        const titleElementmainName = $("<span>");
        titleElementmainName.addClass("s-home-text-cname");
        titleElementmainName.text(homeContent.stilizedCName);
        
        const titleElementsubName = $("<small>");
        titleElementsubName.addClass("s-home-text-csubname");
        titleElementsubName.text(homeContent.stilizedCSubname);

        hstitleElement.append(titleElementmainName);
        hstitleElement.append(titleElementsubName);
        
        const descriptionElement = $('<p>');
        descriptionElement.text(homeContent.description);

        const btnElement = $("<a>");
        btnElement.attr('href', homeContent.buttonLink);
        btnElement.text(homeContent.buttonText);
        btnElement.addClass('btn btn-cta');

        textButtonBlock.append(hstitleElement);
        textButtonBlock.append(descriptionElement);
        textButtonBlock.append(btnElement);

        homeSectionElement.append(textButtonBlock);
    }

    const aboutContent = {
         title: "Sobre nós",
         description: "Na Maxlimp Rio, somos especialistas em soluções completas de limpeza profissional e descartáveis para empresas no Rio de Janeiro.Nossa missão é simplificar a gestão de suprimentos, garantindo qualidade, economia e agilidade. Oferecemos uma ampla variedade de produtos de alta performance, com preços especiais para compras em volume. Asseguramos entregas rápidas em até 48 horas, frete grátis e faturamento via boleto bancário, garantindo total competitividade. Ao escolher a Maxlimp Rio, você obtém economia real, qualidade comprovada e suporte personalizado para seu negócio. Estamos prontos para atender suas demandas no atacado e varejo, e será um prazer apresentar uma proposta sob medida para sua próxima cotação. Conte conosco para um ambiente sempre limpo, seguro e produtivo."
    }
  //  <div class="section-content about-content">
            //     <h2 class="section-title">Sobre a Maxlimp Rio</h2>
            //     <div class="about-text-block">
            //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iusto nemo rerum deserunt. Dignissimos vero atque est, quos inventore molestias aspernatur ad asperiores incidunt maxime fugit odio sint voluptatem veritatis!</p>
            //     </div>
            // </div>
            
    function renderAbout(){
        const aboutSectionElement = $("#s-about");

        const sectionContentDiv = $("#div");
        sectionContentDiv.addClass("section-content about-content");

        const abtitleElement = $("#h2");
        titleElement.addClass("section-title");
        titleElement.text(aboutContent.title);

        const textBlockDiv = $("div");
        textBlockDiv.addClass = $("about-text-block");

        const descriptionP = $("div");
        descriptionP.text(aboutContent.description);
        textBlockDiv.append(descriptionP);

        sectionContentDiv.append(abtitleElement);
        sectionContentDiv.append(textBlockDiv);

        aboutSectionElement.append(sectionContentDiv);
    }


    const contactContent = {
        title: "Contato",
        description: "Fale conosco para dúvidas e orçamentos.",
        whatsappNum: "5521998355672",
        buttonText: "Fale no WhatsApp",
        email: "contato.maxlimp@gmail.com"
    };

    function renderContact(){
        const contactSectionElement = $("#s-contact");
        const sectionContentDiv = $("<div>");
        sectionContentDiv.addClass("section-content contact-content");
        const cttitleElement = $("<h2>");
        cttitleElement.addClass("section-title");
        cttitleElement.text(contactContent.title);

        const descriptionP = $("<p>");
        descriptionP.addClass("contact-description");
        descriptionP.text(contactContent.description);

        const whatsappButton = $("<a>");
        whatsappButton.addClass("btn btn-whatsapp");
        whatsappButton.attr({
            "href": `https://wa.me/${contactContent.whatsappNum}`,
            "target": "_blank",
            "rel": "noopener noreferrer"
        });

    const whatsappIcon = $("<img>");
    whatsappIcon.attr({
        "src": "assets/wpp-icon.svg",
        "alt": "ícone Whatsapp",
        "class": "whatsapp-icon" 
    });
    whatsappButton.append(whatsappIcon);
    whatsappButton.append(contactContent.buttonText);

    const contactInfoDiv = $("<div>");
    contactInfoDiv.addClass("contact-info");

    const emailP = $("<p>");
    emailP.html(`<strong>E-mail:</strong> ${contactContent.email}`);

    contactInfoDiv.append(emailP);

    sectionContentDiv.append(cttitleElement);
    sectionContentDiv.append(descriptionP);
    sectionContentDiv.append(whatsappButton);
    sectionContentDiv.append(contactInfoDiv);

    contactSectionElement.append(sectionContentDiv);


}
const footerContent = {
    copy: "&copy; 2025 Maxlimp Rio. Todos os direitos reservados.",
    creditsText: "Desenvolvido por:",
    githubUser: "@pedronrs",
    githubLink: "https://github.com/pedronrs" 
}

function renderFooter(){
    const footerElement = $("#main-footer");

    const copyP = $("<p>");
    copyP.addClass("footer-copy");
    copyP.html(footerContent.copy);

    const creditsSmall = $("<small>");
    creditsSmall.addClass("footer-credits");
    creditsSmall.text(footerContent.creditsText + " ");
    const githubLink = $("<a>");
    githubLink.attr({
        "href": footerContent.githubLink,
        "target": "_blank",
        "rel": "noopener noreferrer"
    });
    githubLink.text(footerContent.githubUser);
    creditsSmall.append(githubLink);

    footerElement.append(copyP);
    footerElement.append(creditsSmall);
}

$(document).ready(function(){
    renderHomeSection();
    renderAbout();
    renderContact();
    renderFooter();
})

            //  <div class="section-content contact-content">
            //     <h2 class="section-title">Entre em Contato</h2>
            //     <p class="contact-description">Fale conosco para dúvidas e orçamentos.</p>
            //     <a href="https://wa.me/5521998355672" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            //         <img src="assets/whatsapp-icon.svg" alt="Ícone WhatsApp" class="whatsapp-icon">
            //     </a>
            //     <div class="contact-info">
            //         <p><strong>Telefone:</strong>21 98765-4321</p>
            //         <p><strong>E-mail:</strong>contato.maxlimp@gmail.com</p>
            //     </div>
            // </div>


        //     <p class="footer-copy">&copy; 2025 Maxlimp Rio. Todos os direitos reservados</p>
        // <small class="footer-credits">Desenvolvido por: <a href="https://github.com/pedronrs" target="_blank">@pedronrs</a></small>

