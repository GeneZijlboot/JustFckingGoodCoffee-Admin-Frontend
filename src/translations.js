// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define translations for each locale
const messages = {
  en: {
    reset_password: 'Reset password',
    submit: 'Submit',
    first_name: 'First name',
    last_name: 'Last name',
    house_number: 'House number',
    personal_information: 'Personal information',
    login_information: 'Login information',
    password_confirm: 'Password confirm',
    city: 'City',
    streetname: 'Streetname',
    phone_number: 'Phone number',
    zip_code: 'Zip code',
    login: 'Login',
    register: 'Register',
    forgot_password: 'Forgot password?',
    password: 'Password',
    click_here: 'Click here',
    back_to_home: 'Back to home',
    email_text: 'Email',
    home: 'Home',
    subscribe: 'Subscribe',
    shop: 'Shop',
    about_us: 'About Us',
    shopping_cart: 'Shopping cart',
    english: 'English',
    dutch: 'Dutch',
    email: {
      succesfully: {
        send: 'A link has been sent to your email, with which you can change your password.',
      }
    },
    product_details: {
      peru_monteverde: { // ----- PERU MOTEVERDE ----- //
        description:
        `
          <p>Café Monteverde is a producer group that unites 250 farmers from the area around Rodriguez de Mendoza. This coffee features the typical flavor characteristics of the region. This unique and perfectly balanced coffee has a full, creamy body with sweet notes of caramel, nuts, and plums. A delightful coffee you can drink all day long. Perfectly suited as espresso and lungo and as a base for cappuccino, but also enjoyable as filter coffee.</p>
        `,
        data:
        `
          <h3>FEATURES:</h3>
          <span>Country of origin: Peru</span>
          <span>Region: Rodriguez de Mendoza, Amazonas</span><br />
          <span>Farm: Small farmer producers</span><br />
          <span>Altitude: 1400-1800m</span><br />
          <span>Processing: Washed</span><br />
          <span>Variety: Bourbon/ Catimor/ Catuai/ Pache/ Typica</span>
        `,
        information:
        `
          <h3>Peru</h3>
          <br />
          <p>Peru is known as a producer of high-quality coffees. The country is the world's largest exporter of organic Arabica coffee. With extremely high altitudes and fertile soils, the small farmers of the country also produce a number of beautiful specialty coffees.</p>
          <p>Most Peruvian coffee plantations are small-scale. Farmers in Peru usually process their coffee on their own farms. Most coffee is fully washed. The coffee cherries are typically pulped, fermented, and sun-dried on raised beds or drying patios. They are then sold to cooperatives or intermediaries. The remote location of farms combined with their small size means that producers need intermediaries or cooperatives to bring their coffee to market. Membership in a cooperative strongly protects farmers from exploitation and can make a huge difference in coffee income. Nonetheless, currently only about 15-25% of small farmers are part of a coop group.</p>
          <br />
          <h3>Café Monteverde</h3>
          <br />
          <p>Café Monteverde is a producer group that unites 250 farmers from the area around Rodriguez de Mendoza, Amazonas, Peru. Founders Alfonso Tejada and Karen Araoz offer their own Finca Timbuyacu as a model farm where members can learn many valuable skills in cultivation and processing to help improve their harvest.</p>
          <p>Café Monteverde was founded in 2003 by Alfonso Tejada and Karen Araoz. While both Tejada and Araoz grew up in Rodriguez de Mendoza, they previously ran a travel agency together in Lima. After selling their agency, the two purchased Finca Timbuyacu and moved back to their hometown.</p>
          <p>Finca Timbuyacu became the foundation of Café Monteverde. The couple dedicated themselves to improving the social conditions for other small producers in the region, and they saw the company as a way to help producers in the region bring their coffee to market. Since its inception, Café Monteverde has built relationships with a wide range of producers and producer organizations. In addition to producing a range of their own micro-lots from Finca Timbuyacu, they market lots like this one and provide a range of services to the producers they work with.</p>
          <p>Perhaps most importantly, Finca Timbuyacu serves as a model farm. Members can visit to learn more about farm management and harvesting, as well as post-harvest practices such as fermentation, washing, and various drying methods. Finca Timbuyacu specializes in training members in a variety of skills to elevate their production quality to the highest possible level.</p>
          <p>Monteverde supports small farmers in taking measures for good soil management and conservation. Farmers plant live barriers and diverse shade trees and add contour lines to reduce erosion. Araoz and Tejada also take an active role in the communities of their producers. In 2010, the organization jointly purchased a playground for children in one producer community. Then in 2014, they bought 40 new mattresses for children whose sleeping conditions were substandard.</p>
          <br />
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `,
      },
      guatemala_las_joyas: { // ----- GUATEMALA LAS JOYAS ----- //
        description:
        `
          <p>Discover Las Joyas, our latest Direct Trade coffee from Guatemala! This exceptionally smooth, sweet coffee delights your taste buds with notes of brown sugar and caramel. The finish reveals subtle hints of raspberry and black cherry. Perfect for any occasion, whether you enjoy it as an espresso, lungo, or filter coffee. With its full, creamy finish, this is the coffee you'll want to drink all day long. Choose quality and indulge in this delicious coffee!</p>
        `,
        data:
        `
          <h3>FEATURES:</h3>
          <span>Country of Origin: Guatemala</span>
          <span>Region: Huehuetenango</span><br />
          <span>Farm: Finca Las Joyas</span><br />
          <span>Producer: Rudy Lopez</span><br />
          <span>Altitude: 1600m</span><br />
          <span>Processing: Washed</span><br />
          <span>Variety: Caturra, Bourbon, Catuaí</span>
        `,
        information:
        `
          <h3>Rudy Lopez Castillo: The Journey of a Coffee Farmer</h3>
          <br />
          <p>As a child, Rudy Lopez Castillo grew up on a farm, surrounded by the smell of earth and the beauty of nature. It was a life full of hard work and dedication, where he and his family tended to various crops. In 1996, he inherited a portion of the land, and his journey with coffee began. Although the start was challenging, with few resources and big dreams, Rudy never gave up. "Step by step, I started planting," he says. "Without the support of my wife and family, I wouldn't have made it."</p>
          <p>Today, Rudy is especially proud that he can produce high-quality coffee, which he sells to a special audience. But the road has not been without obstacles. "The climate is changing, input costs are rising, and coffee prices fluctuate," he explains. These are worrying factors, especially since he and his family rely entirely on coffee production.</p>
          <p>To ensure the quality of his coffee and the health of his business, Rudy focuses on improving the processes on his farm. Soil analysis, optimal harvesting techniques, and refined post-harvest processing are some of the key strategies he applies. "Quality is crucial," he emphasizes. "It's the only way to create a sustainable future for our family and our land."</p>
          <p>Rudy Lopez Castillo is living proof that perseverance, passion, and the support of loved ones can help you achieve your dreams, even in challenging times.</p>
          <br />
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `,
      },
      espresso_la_morelia: { // ----- ESPRESSO LA MORELIA ----- //
        description:
        `
          <p>Enjoy a delicious cup of coffee with our Direct Trade Espresso from Colombia. This espresso has a strong, full, and creamy character that will surprise your taste buds.</p>
          <p>Immerse yourself in the tempting aromas of chocolate, hazelnut, and brown sugar. Every sip is a true flavor sensation with a sweet and full-bodied aftertaste that you'll cherish for a long time.</p>
          <p>Enjoy this exceptional quality. Our Direct Trade Espresso is carefully selected and artisan roasted for a unique coffee experience. Choose flavor, choose quality - choose Espresso La Morelia.</p>
        `,
        data:
        `
          <h3>FEATURES:</h3>
          <span>Country of origin: Colombia</span><br />
          <span>Region: Risaralda, municipality of Belen de Umbria</span><br />
          <span>Farm: Finca La Morelia</span><br />
          <span>Producer: Abel Cardona</span><br />
          <span>Altitude: 1600m</span><br />
          <span>Processing: Washed</span><br />
          <span>Variety: Castillo</span>
        `,
        information:
        `
          <h3>Discover the flavorful world of La Morelia</h3>
          <br />
          <p>Are you joining us? Let's dive into the wonderful world of this delightful direct trade coffee!</p>
          <p>In collaboration with Origin Bridge, we have sourced a beautiful coffee from the La Morelia farm in Colombia. What makes this coffee so special? Let me take you on a journey of discovery.</p>
          <p>La Morelia is located in Belén de Umbría, in the heart of Colombia's coffee region, at an altitude of about 1600 meters. Thanks to the unique microclimate, surrounded by the Andes, the most delicious coffee cherries grow here. The farm covers 8 hectares, 5 of which are dedicated to coffee cultivation. The remaining 3 hectares are devoted to other crops like bananas, tomatoes, and cassava. A true mixed farm, just as it used to be.</p>
          <p>The third-generation coffee grower, Abel Cardona (62), runs this farm with his wife and 4 children. His grandparents moved to this region, the so-called 'coffee axis', nearly a century ago to fully dedicate themselves to coffee cultivation. Abel and his family have devoted their entire lives to this craft.</p>
          <p>So what makes this coffee so special? Well, thanks to the collaboration with Origin Bridge, Abel receives a fair price for his harvest. This allows him to invest in his business and inspire his children to continue this beautiful trade. In this way, artisanal, sustainable coffee production is preserved. And we, as coffee lovers, get to enjoy it!</p>
          <p>Let’s dive into the surprising flavors of this La Morelia coffee together. I can't wait to hear your feedback. Enjoy!</p>
          <br />
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `,
      },
      colombia_mariposa_azul: { // ----- COLOMBIA MARIPOSA AZUL ----- //
        description:
        `
          <p>With every kilo sold, you support the Amucafe project; a women-led cooperative dedicated to environmental protection. You can read more about it <a href="#">here</a>.</p>
          <p>Colombia Mariposa Azul is a full, creamy, and robust coffee, perfectly balanced with sweet notes of dark chocolate, brown sugar, caramel, vanilla, and walnuts.</p>
          <p>By purchasing this exceptionally good coffee, you indirectly contribute to a greener future and the protection of our earth – particularly the piece of heaven on earth called Cuchilla de San Juan.</p>
        `,
        data:
        `
          <h3>FEATURES:</h3>
          <span>Country of origin: Colombia</span><br />
          <span>Region: Risaralda, municipality of Belen de Umbria</span><br />
          <span>Farm: 183 farmers from Cuchilla del San Juan</span><br />
          <span>Producer: Abel Cardona</span><br />
          <span>Altitude: 1600m</span><br />
          <span>Processing: Washed</span><br />
          <span>Variety: Various</span><br />
        `,
        information:
        `
          <p>Our new project coffee is something to be proud of: Colombia Mariposa Azul. This Colombian 'blue butterfly' has a story as beautiful as its remarkable name suggests. A story about innovation, sustainability, and exceptionally good coffee. We are delighted to take you on a journey to the idyllic slopes of Cuchilla de San Juan, 'the top of the mountain,' in enchanting green Colombia.</p>
          <p>In this picturesque place, 183 passionate coffee farmers grow exceptionally good coffee beans. The coffee is globally praised for its unique creamy, robust, and sweet flavor profile, perfectly balanced with notes of dark chocolate, brown sugar, caramel, vanilla, and walnuts.</p>
          <p>But this achievement also brought its dilemmas. The pulp, the waste generated during coffee production, ended up in the water of streams and rivers, posing a threat to the local ecosystem. The fact that this story has a happy ending probably comes as no surprise. However, what is surprising is the innovative solution by a group of ambitious women within the cooperative.</p>
          <p>Coffee pulp a problem? Quite the opposite! With the help of diligent worms and composting, they turned the coffee waste into organic fertilizer, which was then used as a rich nutrient source for local agriculture. Smaller footprint, greater impact.</p>
          <p>If you want to learn more about this special initiative, read more <a href="#">here</a> for the full story.</p>
          <p>For every kg of Colombia Mariposa Azul we purchased from this cooperative, we donated €0.75 to Amucafe. So when you enjoy a cup of this exceptionally good coffee, you are indirectly contributing to a greener future and the protection of our earth – especially the piece of heaven on earth called Cuchilla de San Juan. And for that, we, the local population, and the women of Amucafe are grateful to you.</p>
          <p>So, a truly great coffee, with a great story and a great feeling.</p>
          <br />
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `, 
      },
      sumatra_orang_utan: { // ----- SUMATRA ORANG UTAN ----- //
        description: `
          <p>A complex coffee with an intense, full-bodied aroma and a delightful sweet and spicy taste of dark chocolate and raisins. Highly recommended as an espresso, lungo, or as a base for milk-based specialties, but also suitable for filter coffee. <strong>€1 from every kilo sold goes to the Orang Utan project!</strong></p>
        `,
        data: `
          <h3>FEATURES:</h3>
          <span>Country of Origin: Sumatra</span><br />
          <span>Region: Central Aceh</span><br />
          <span>Plantation: Small farmer producers</span><br />
          <span>Altitude: 900-2400m</span><br />
          <span>Processing: Semi-washed</span>
        `,
        information: `
          <p>One project that concerns us all is the Orang Utan project. The habitat of this magnificent species is shrinking, and we want to do something about it. Together with the Orang Utan Coffee Project, we support the living conditions and financial situation of coffee farmers and the Orang Utan's habitat.</p>
          <p><strong>€1 from every kilo sold goes to the Orang Utan project!</strong></p>
          <p>The Orang Utan is on the list of endangered species. Its habitat, the tropical rainforests of Sumatra, is being systematically cleared due to the demand for tropical hardwood. In the last two years, about 88 football fields of tropical rainforest have disappeared annually.</p>
          <p>By ordering this Direct Trade coffee, you're not only enjoying an extraordinary cup of coffee, but you're also helping to protect the Orang Utan's habitat.</p>
          <p><strong>Wih Bersih</strong></p>
          <p>The idyllic village of Wih Bersih is located on the slopes of a volcano at an altitude of 1200-1600 meters in the Aceh Tengah province. Wih Bersih is surrounded by coffee plantations and is near a rainforest that covers the top of the volcano. In 2012, the Orang Utan project started with 40 coffee farmers from this region. Now, there are 75 farmers with a total of about 53 hectares of coffee plantations. They mainly grow the Tim-Tim and Ateng varieties. The first plantations were organically certified in 2014.</p>
          <p>Wih Bersih literally means 'clean water'. Thanks to the rainforest, Wih Bersih benefits from pristine water. The biodiversity of the plantations is very high, partly because the coffee producers plant a variety of shade trees, such as avocado, tangerine, papaya, banana, and cinnamon.</p>
          <p>To ensure the local coffee farmers can truly make a difference, they receive an additional premium of €0.50 per kilo of green coffee on top of the (higher) Direct Trade coffee price. This amount is to be used for improvements on the plantations so that the rainforest is preserved and the quality of the coffee continues to improve. The Orang Utan Coffee Project has been running since 1999 in partnership with the Indonesian government through the Sumatra Orang Utan Conservation Programme (SOCP), where an additional €0.50 per kilo is also donated.</p>
          <p>The tropical rainforests of Sumatra provide ideal conditions for growing specialty coffee. In the Gayo Highlands of Central Aceh, just north of the equator, lies the best coffee-growing region in Southeast Asia, at altitudes between 900 and 2400 meters. The steep crater slopes, shrouded in mist and tropical rainforest, allow Arabica coffee to ripen slowly and perfectly. This is where our Sumatra Orang Utan coffee originates.</p>
          <p>The Orang Utan coffee comes exclusively from small family-owned plantations that cultivate coffee in an ecologically responsible manner. It is essential that these family plantations sign a contract in which they are actively involved in protecting the tropical rainforest and its flora and fauna.</p>
          <p>Ensuring the quality of the coffee is crucial for the success of this project. Only when our customers appreciate the quality of our Orang Utan coffee can we truly make a difference.</p>
          <p>Therefore, constant quality controls are carried out to ensure that this Direct Trade coffee meets the highest quality standards. On the plantations, we work together with the YEL Foundation (Yayasan Ekosistem Lestari), which is committed to sustainable and responsible ecosystems that have a positive impact on the entire environment. A representative from YEL visits the plantations at least three times a year along with Regina Frey (the coordinator of the Orang Utan Coffee Project) and members of the Gayo Cuppers Team. These visits include checks from harvest to shipment. This constant focus on quality is exactly what we value.</p>
          <br />
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `,
      },
      costa_rica: { // ----- COSTA RICA ----- //
        description:
        `
          <p>This coffee from Costa Rica is characterized by a full, complex body and an intense aroma. A delightful coffee with sweet notes of red fruit, plums, and chocolate in the aftertaste. A tasty and enjoyable coffee to drink all day long. Perfect as an espresso, but also well-suited for filter coffee.</p>
        `,
        data:
        `
          <h3>FEATURES:</h3>
          <span>Country of Origin: Costa Rica</span><br />
          <span>Region: Tarrazu - Carrizal community</span><br />
          <span>Producer: Smallholder farmers</span><br />
          <span>Altitude: 1,600-1,800m</span><br />
          <span>Variety: Catuai, Caturra</span>
        `,
        information:
        `
          <p>Coffee has been grown in Costa Rica since 1779. One of the most renowned coffee-producing regions in Costa Rica is undoubtedly the Tarrazu province, where the rich volcanic soils and surrounding mountains create a nutrient-rich and protected environment for planting high-quality arabica coffees.</p>
          <br />
          <p>The Tarrazu region produces some of the best coffee varieties in Costa Rica. The Pacific Ocean strongly influences the climate with two very distinct seasons: the rainy season from June to November and the dry season from December to May.</p>
          <br />
          <p>This coffee comes from Carrizal, a small community near the city of San Isidro. Carrizal is located at about 1600 meters above sea level, where green mountain landscapes and coffee plantations are abundant. This lot consists of coffees from 56 smallholder farmers. Coffee production is the basis of the local economy. Most of the producers work with their family on their farms.</p>
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `,
      },
      espresso_grande_alta: { // ----- ESPRESSO GRANDE ALTA ----- //
        description:
        `
          <p>Hey coffee lover, do you know what you're drinking today? Meet the Espresso Grande Alta - the perfect start to your day!</p>
          <p>This delicious espresso is so good, you just can't get enough of it. With its full, smooth, and creamy flavor, it's like letting a piece of milk chocolate melt in your mouth. Combined with hints of almonds and brown sugar, you get an espresso that you simply can't resist.</p>
          <p>Thanks to its low acidity and soft, creamy body, this is a coffee you can drink all day long. Whether you're waking up in the morning or taking a break in the afternoon - this espresso is always a hit.</p>
          <p>By the way, the Espresso Grande Alta is also great as a lungo or as a base for cappuccino! So, what are you waiting for?</p>
        `,
        data:
        `
          <h3>FEATURES:</h3>
          <span>Country of Origin: Brazil</span><br />
          <span>Region: Manhuacu - Matas de Minas</span><br />
          <span>Plantation: Fazenda Araujo</span><br />
          <span>Altitude: 1000m</span><br />
          <span>Processing: Pulped Natural</span><br />
          <span>Variety: Mundo Novo</span>
        `,
        information:
        `
          <h3>Espresso Grande Alta: Superior Coffee from Brazil</h3>
          <p>Looking for an exceptional coffee experience? Then you have to try the Espresso Grande Alta from Fazenda Araujo! This coffee comes from Manhaucu in Matas de Minas, Brazil, where it is grown at an impressive altitude of 1000 meters.</p>
          <p>The Araújo family has been in the coffee business since 1976, when the grandfather bought a piece of land to grow his first coffee plants. Despite the challenges that altitude and terrain presented, he was determined to produce top-quality coffee. And he succeeded!</p>
          <p>Today, the plantation is run by the third generation, with Rafael Araújo at the helm. He combines family traditions with innovative techniques to create the very best coffee. Since 2014, they have refined their drying techniques and identified superior microlots. The result? In 2017 and 2019, their 'pulped natural' specialty lots reached the finals of the prestigious Ernesto Illy Coffee Competition in New York!</p>
          <p>So, if you want a coffee that will blow you away, try the Espresso Grande Alta. A sip of Brazilian passion and craftsmanship in your cup!</p>
          <br />
          <h3>Matas de Minas</h3>
          <br />
          <p>Matas de Minas bestaat uit 63 gemeenten en ligt in het oosten van de staat Minas Gerais. De regio Matas de Minas wordt gereguleerd door de Matas de Minas Coffee Association Council, een non-profitorganisatie met vertegenwoordigers van de wetenschappelijke, educatieve en culturele gemeenschappen. Het doel van de Raad is om de kwaliteit, smaakdiversiteit en natuurlijke duurzaamheid van de koffieproductie van Matas de Minas te promoten en te streven naar een duurzame ontwikkeling van de regio. Ze bereiken dit door kennis en trainingen te verspreiden onder producenten en door de collectieve waarde voor gemeenschappen en bedrijven in de regio te versterken.</p>
          <p>De koffieproductie in deze regio is van nature duurzaam en bestaat voornamelijk uit familiale landbouw. Veel producerende families in Matas de Minas verbouwen al meer dan 100 jaar koffie. Ze gebruiken ambachtelijke en traditionele technieken en produceren koffies van bijzonder hoge kwaliteit. Dit resulteert in koffies met een diversiteit aan nuances die zeer gewaardeerd worden in belangrijke nationale en internationale koffiewedstrijden.</p>
        `,
        reviews:
        `
          <p>No reviews available yet.</p>
        `,
      },
      total: 'Total',
      weight: 'Weight',
      amount: 'Amount',
      title: {
        data: 'Data',
        information: 'More information',
        reviews: 'beoordelingen',
      }
    },
  },
  nl: {
    reset_password: 'Wachtwoord resetten',
    submit: 'Bevestigen',
    first_name: 'Voornaam',
    last_name: 'Achternaam',
    house_number: 'House number',
    personal_information: 'Persoonlijke informatie',
    login_information: 'Inloggegevens',
    password_confirm: 'Wachtwoord bevestigen',
    city: 'Stad',
    streetname: 'Straatnaam',
    phone_number: 'Telefoonnummer',
    zip_code: 'Postcode',
    login: 'Inloggen',
    register: 'Registreer',
    forgot_password: 'Wachtwoord vergeten?',
    password: 'Wachtwoord',
    click_here: 'Klik hier',
    back_to_home: 'Terug naar Huis',
    email_text: 'E-mail',
    home: 'Home',
    subscribe: 'Abonneren',
    shop: 'Winkel',
    about_us: 'Over ons',
    shopping_cart: 'Winkelwagen',
    english: 'Engels',
    dutch: 'Nederlands',
    email: {
      succesfully: {
        send: 'Er is een link naar uw e-mail gestuurd, waarmee u uw wachtwoord kunt wijzigen.',
      }
    },
    product_details: {
      peru_monteverde: { // ----- PERU MOTEVERDE ----- //
        description:
        `
          <p>Café Monteverde is een producentengroepering die 250 boeren samenbrengt uit het gebied rond Rodriguez de Mendoza. Deze koffie bevat de typische smaakeigenschappen van de regio. Deze  bijzondere en perfect gebalanceerde koffie heeft een volle, romige body met de zoete tonen van karamel, noten en pruimen. Een heerlijke koffie die je de heel dag door kunt drinken. Perfect geschikt als espresso en lungo en als basis voor cappuccino, maar ook lekker als filterkoffie.</p>
        `,
        data:
        `
          <h3>EIGENSCHAPPEN:</h3>
          <span>Land van herkomst: Peru</span>
          <span>Regio: Rodriguez de Mendoza, Amazonas</span><br />
          <span>Plantage: Small farmer producers</span><br />
          <span>Hoogte: 1400-1800m</span><br />
          <span>Verwerking: Washed</span><br />
          <span>Variëteit: Bourbon/ Catimor/ Catuai/ Pache/ Typica</span>
        `,
        information:
        `
          <h3>Peru</h3>
          <br />
          <p>Peru staat bekend als producent van hoogwaardige koffies. Het land is wereldwijd de grootste exporteur van biologische Arabica-koffie. Met extreem grote hoogten en vruchtbare gronden, produceren de kleine boeren van het land ook een aantal prachtige specialty coffees.</p>
          <p>Het merendeel van de Peruaanse koffieplantages zijn kleinschalig. Boeren in Peru verwerken hun koffie meestal op hun eigen boerderijen. De meeste koffie is volledig gewassen. De koffiebessen worden meestal verpulverd, gefermenteerd en in de zon gedroogd op verhoogde bedden of droogschuren. Vervolgens worden ze verkocht aan coöperaties of tussenpersonen. De afgelegen ligging van boerderijen in combinatie met hun kleine omvang betekent dat producenten tussenpersonen of coöperaties nodig hebben om hun koffie op de markt te brengen. Het lidmaatschap van een coöperatie beschermt boeren sterk tegen uitbuiting en kan een enorm verschil maken voor de inkomsten uit koffie. Desalniettemin heeft momenteel slechts ongeveer 15-25% van de kleine boeren zich aangesloten bij een coop-groep.</p>
          <br />
          <h3>Café Monteverde</h3>
          <br />
          <p>Café Monteverde is een producentengroepering die 250 boeren samenbrengt uit het gebied rond Rodriguez de Mendoza, Amazonas, Peru. Oprichters Alfonso Tejada en Karen Araoz, bieden hun eigen Finca Timbuyacu aan als modelboerderij waar leden veel waardevolle vaardigheden op het gebied van teelt en verwerking kunnen leren om hun oogs te helpen verbeteren.</p>
          <p>Cafe Monteverde is in 2003 opgericht door Alfonso Tejada en Karen Araoz. Terwijl zowel Tejada als Araoz opgroeiden in Rodriguez de Mendoza, hadden ze voorheen samen een reisbureau in Lima. Nadat ze hun bureau hadden verkocht, kochten de twee Finca Timbuyacu en verhuisden ze terug naar hun geboorteplaats.</p>
          <p>Finca Timbuyacu werd de basis van Café Monteverde. Het paar zette zich in om de socialeomstandigheden voor andere kleine producenten in de regio te verbeteren, en ze zagen het bedrijf als een middel om producenten in de regio te helpen hun koffie op de markt te brengen. Sinds de oprichting heeft Café Monteverde relaties opgebouwd met een breed scala aan producenten en producentenorganisaties. Naast het produceren van een reeks van hun eigen micro-lots van Finca Timbuyacu, brengen zij loten zoals deze op de markt en bieden zij een reeks diensten aan de producenten met wie zij werken.</p>
          <p>Misschien wel het belangrijkste is de rol die Finca Timbuyacu speelt als modelboerderij. Leden kunnen een bezoek brengen om meer te weten te komen over boerderijbeheer en oogsten, evenals over praktijken na de oogst zoals fermentatie, wassen en verschillende droogmethoden. Finca Timbuyacu is gespecialiseerd in het trainen van leden in een verscheidenheid aan vaardigheden die hun productiekwaliteit naar het hoogst mogelijke niveau zullen tillen.</p>
          <p>Monteverde helpt de kleine boeren bij het nemen van maatregelen voor goed bodembeheer en -behoud. De boeren planten levende barrières en diverse schaduwbomen en voegen contourlijnen toe om erosie te verminderen. Araoz en Tejada nemen ook een actieve rol in de gemeenschappen van hun producenten. In 2010 kocht de organisatie gezamenlijk een speelplaats voor kinderen in één producentengemeenschap. Vervolgens kochten ze in 2014 40 nieuwe matrassen voor kinderen van wie de slaapomstandigheden ondermaats waren.</p>
          <br />
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      guatemala_las_joyas: { // ----- GUATEMALA LAS JOYAS ----- //
        description:
        `
          <p>Ontdek Las Joyas, onze nieuwste Direct Trade koffie uit Guatemala! Deze bijzonder zachte, zoete koffie verwent je smaakpapillen met tonen van bruine suiker en karamel. In de afdronk proef je subtiele hints van framboos en zwarte kersen. Perfect voor elke gelegenheid, of je nu geniet van een espresso, lungo of filterkoffie. Met zijn volle, romige afdronk is dit dé koffie die je de hele dag door wilt drinken. Kies voor kwaliteit en laat je verleiden door deze heerlijke koffie!</p>
        `,
        data:
        `
          <h3>EIGENSCHAPPEN:</h3>
          <span>Land van herkomst: Guatemala</span><br />
          <span>Regio: Huehuetenango</span><br />
          <span>Plantage: Finca Las Joyas</span><br />
          <span>Producent: Rudy Lopez</span><br />
          <span>Hoogte: 1600m</span><br />
          <span>Verwerking: Washed</span><br />
          <span>Variëteit: Caturra, Bourbon,Catuaí</span>
        `,
        information:
        `
          <h3>Rudy Lopez Castillo: De Reis van een Koffieteler</h3>
          <br />
          <p>Als kind groeide Rudy Lopez Castillo op op een boerderij, omringd door de geur van aarde en de pracht van de natuur. Het was een leven vol hard werken en toewijding, waarbij hij samen met zijn familie zorg droeg voor de verschillende gewassen. In 1996 erfde hij een deel van het land, en zijn avontuur met koffie begon. Hoewel de start moeilijk was, met weinig middelen en grote dromen, gaf Rudy nooit op. "Stap voor stap begon ik te planten," zegt hij. "Zonder de steun van mijn vrouw en familie had ik het niet gered.”</p>
          <p>Vandaag de dag is Rudy vooral blij dat hij koffie van hoge kwaliteit kan produceren, die hij verkoopt aan een speciaal publiek. Maar de weg is niet zonder hindernissen. "Het klimaat verandert, de kosten van input stijgen en de koffieprijzen fluctueren," legt hij uit. Dit zijn zorgwekkende factoren, vooral omdat hij en zijn gezin volledig afhankelijk zijn van de koffieproductie.<p>
          <p>Om de kwaliteit van zijn koffie en de gezondheid van zijn bedrijf te waarborgen, richt Rudy zich op het verbeteren van de processen op zijn boerderij. Bodemanalyse, optimale oogsttechnieken en verfijnde nabehandeling zijn enkele van de sleutelstrategieën die hij toepast. "Kwaliteit is cruciaal," benadrukt hij. "Het is de enige manier om een duurzame toekomst voor onze familie en ons land te creëren.”</p>
          <p>Rudy Lopez Castillo is het levende bewijs dat doorzettingsvermogen, passie en de steun van geliefden je kunnen helpen om je dromen waar te maken, zelfs in uitdagende tijden.</p>
          <br />
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      espresso_la_morelia: { // ----- ESPRESSO LA MORELIA ----- //
        description:
        `
          <p>Geniet van een heerlijke kop koffie met onze Direct Trade Espresso uit Colombia. Deze espresso heeft een stevig, vol en romig karakter dat je smaakpapillen zal verrassen.</p>
          <p>Laat je onderdompelen in de verleidelijke aroma's van chocolade, hazelnoot en bruine suiker. Elke slok is een ware smaaksensatie met een zoete en volle afdronk die je nog lang zult koesteren.</p>
          <p>Geniet van deze uitzonderlijke kwaliteit. Onze Direct Trade Espresso is met zorg geselecteerd en ambachtelijk gebrand voor een bijzondere koffie-ervaring. Kies voor smaak, kies voor kwaliteit - kies voor Espresso La Morelia.</p>
        `,
        data:
        `
          <h3>EIGENSCHAPPEN:</h3>
          <span>Land van herkomst: Colombia</span><br />
          <span>Regio: Risaralda, municipality of Belen de Umbria</span><br />
          <span>Plantage: Finca La Morelia</span><br />
          <span>Producent: Abel Cardona</span><br />
          <span>Hoogte: 1600m</span><br />
          <span>Verwerking: Washed</span><br />
          <span>Variëteit: Castillo</span>
        `,
        information:
        `
          <h3>Ontdek de smaakvolle wereld van La Morelia</h3>
          <br />
          <p>Geniet je met ons mee? Laten we eens duiken in de bijzondere wereld van deze heerlijke direct trade koffie!</p>
          <p>In samenwerking met Origin Bridge hebben we een prachtige koffie weten in te kopen, afkomstig van de La Morelia plantage in Colombia. Wat is er toch bijzonder aan deze koffie? Laat me je meenemen op een ontdekkingsreis.</p>
          <p>La Morelia ligt in Belén de Umbría in het hart van de Colombiaanse koffiegordel, op zo'n 1600 meter hoogte. Dankzij het speciale microklimaat, omringd door de Andes, groeien hier de meest heerlijke koffiebessen. De boerderij beslaat 8 hectare, waarvan 5 hectare koffieplantage. De overige 3 hectaren zijn gewijd aan andere gewassen als bananen, tomaten en cassave. Een echt gemengd bedrijf, zoals dat vroeger de normaalste zaak van de wereld was.</p>
          <p>De derde generatie koffieteler, Abel Cardona (62), runt deze boerderij samen met zijn vrouw en 4 kinderen. Zijn grootouders trokken bijna een eeuw geleden al naar deze regio, de zogenaamde 'coffee axis', om zich volledig te wijden aan de koffieteelt. Abel en zijn familie hebben hun hele leven gewijd aan dit ambacht.</p>
          <p>Wat maakt deze koffie nou zo bijzonder? Wel, dankzij de samenwerking met Origin Bridge krijgt Abel een eerlijke prijs voor zijn oogst. Hij kan daardoor investeren in zijn bedrijf en zijn kinderen enthousiasmeren om dit prachtige vak voort te zetten. Zo blijft de ambachtelijke, duurzame koffieproductie behouden. En wij mogen daar als liefhebbers van genieten!</p>
          <p>Laten we samen duiken in de verrassende smaken van deze La Morelia koffie. Ik kan niet wachten om je reactie te horen. Enjoy!</p>
          <br />
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      colombia_mariposa_azul: { // ----- COLOMBIA MARIPOSA AZUL ----- //
        description:
        `
          <p>Met iedere verkochte kilo steun je het Amucafe project; een door vrouwen geleide coöperatie die zich inzet voor milieubescherming. Je leest er <a href=“#”>hier﻿<a/> meer over.</p>
          <p>Colombia Mariposa Azul is een volle, romige en stevige koffie, perfect gebalanceerde met de zoete tonen van pure chocolade, bruine suiker, karamel, vanille en walnoten.</p>
          <p>Met de aankoop van deze uitzonderlijk goede koffie, draag je indirect bij aan een groenere toekomst en de bescherming van onze aarde – en in het bijzonder het stukje hemel op aarde dat Cuchilla de San Juan heet.</p>
        `,
        data:
        `
          <h3>EIGENSCHAPPEN:</h3>
          <span>Land van herkomst: Colombia</span><br />
          <span>Regio: Risaralda, municipality of Belen de Umbria</span><br />
          <span>Plantage: 183 boeren uit Cuchilla del San Juan</span><br />
          <span>Producent: Abel Cardona</span><br />
          <span>Hoogte: 1600m</span><br />
          <span>Verwerking: Washed</span><br />
          <span>Variëteit: Diverse</span>
        `,
        information:
        `
          <p>Onze nieuwe projectkoffie is er eentje om trots op te zijn: de Colombia Mariposa Azul. Deze Colombiaanse ‘blauwe vlinder’ heeft een even mooi verhaal als z’n bijzondere naam doet vermoeden. Een verhaal over innovatie, duurzaamheid en buitengewoon goede koffie. We nemen je graag mee op reis naar de idyllische hellingen van Cuchilla de San Juan, ‘de top van de berg’, in het betoverend groene Colombia.</p>
          <p>Op deze schilderachtige plek worden door 183 gepassioneerde koffieboeren uitzonderlijk goede koffiebonen geteeld. De koffie wordt wereldwijd geprezen om zijn unieke romige, stevige en zoete smaakprofiel, dat perfect in balans is gebracht met tonen van pure chocolade, bruine suiker, karamel, vanille en walnoten.</p>
          <p>Maar deze prestatie bracht ook de nodige dilemma’s met zich mee. De pulp, het afval dat ontstaat bij het produceren van koffie, kwam in het water van beken en rivieren terecht, met gevaren voor het lokale ecosysteem als gevolg. Dat dit verhaal een goed einde heeft komt vast niet als een verrassing. Maar wat wél verrassend is, is de innovatieve oplossing van een groep ambitieuze vrouwen binnen de coöperatie.</p>
          <p>Koffiepulp een probleem? Integendeel! Met behulp van ijverige wormen en compostering toverden zij het koffieafval om tot organische mest, die vervolgens weer kon worden gebruikt als rijke voedingsbron voor de lokale landbouw. Kleinere voetafdruk, grotere impact.</p>
          <p>Wil je meer weten over dit bijzondere initiatief, lees dan <a href=“#”>hier<a/> verder voor het hele verhaal. </p>
          <p>Voor elke kg Colombia Mariposa Azul die we van deze coöperatie hebben ingekocht, hebben we € 0,75 gedoneerd aan Amucafe. Drink je dus een kopje van deze uitzonderlijk goede koffie, dan draag je indirect bij aan een groenere toekomst en de bescherming van onze aarde – en in het bijzonder het stukje hemel op aarde dat Cuchilla de San Juan heet. En daar zijn wij, de plaatselijke bevolking, en de vrouwen van Amucafe je dankbaar voor.</p>
          <p>Een écht goede koffie dus, met een goed verhaal en een goed gevoel.</p>
          <br />
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      sumatra_orang_utan: { // ----- SUMATRA ORANG UTAN ----- //
        description:
        `
          <p>Een complexe koffie met een intens, vol en stevig aroma en met een heerlijke zoete en kruidige smaak van pure chocolade en rozijnen. Een aanrader als espresso en lungo of als basis voor melk specialiteiten, maar ook geschikt als filterkoffie. <strong>Van iedere verkochte kilo gaat € 1,- naar het Orang Utan project!</strong></p>
        `,
        data:
        `
          <h3>EIGENSCHAPPEN:</h3>
          <span>Land van herkomst: Sumatra</span><br />
          <span>Regio: Centraal Aceh</span><br />
          <span>Plantage: Small farmer producers</span><br />
          <span>Hoogte: 900-2400m</span><br />
          <span>Verwerking: Semi-washed</span>
        `,
        information:
        `
          <p>Een project wat ons allemaal aangaat is het Orang Utan project. Het leefgebied van deze prachtige diersoort wordt steeds kleiner en hier willen wij graag iets aan doen. Samen met het Orang Utan Coffee Project ondersteunen wij de leefomstandigheden en de financiële positie van koffieboeren en het leefgebied van de Orang Utan.</p>
          <p><strong>Van iedere verkochte kilo gaat € 1,- naar het Orang Utan project!</strong></p>
          <p>De Orang Utan staat op de lijst van bedreigde diersoorten. Het leefgebied, het tropische regenwoud van Sumatra, wordt door de jacht op tropisch hardhout systematisch gekapt. De laatste 2 jaar zijn er per jaar circa 88 voetbalvelden aan tropisch regenwoud verdwenen.</p>
          <p>Met het bestellen van deze Direct Trade koffie krijg je dus niet alleen een buitengewoon lekkere koffie, je helpt direct mee om het leefgebeid van de Orang Utan te beschermen.</p>
          <p><strong>Wih Bersih</strong></p>
          <p>Het idyllische dorp Wih Bersih is gelegen in een uitloopgebied van een vulkaan op een hoogte van 1200-1600 in de Aceh Tengah provincie. Wih Bersih is omringd door koffie plantages en is gelegen in de buurt van een regenwoud welke de top van de vulkaan bedekt. In 2012 is het Orang Utan project gestart met 40 koffieboeren uit deze regio. Inmiddes zijn het er 75 met in totaal ongeveer 53ha aan koffieplantages. Ze verbouwen voornamelijk de Tim-Tim en Ateng variëteiten. De eerste plantages zijn biologisch gecertificeerd in 2014.</p>
          <p>Wih Bersih betekent letterlijk 'clean water'. Dankzij het regenwoud profiteert Wih Bersih van ongerept water. De biodiversiteit van de plantages is erg hoog, mede omdat de koffie producenten een variatie aan schaduw bomen planten, zoals avocado, mandarijn, papaya, banaan en kaneel.</p>
          <p>Om de lokale koffieboeren ook echt het verschil te kunnen laten maken ontvangen zij een extra premie van € 0,50 per kilo groene koffie bovenop de (hogere) Direct Trade koffieprijs. Dit bedrag moet worden ingezet voor verbeteringen op de plantages zodat het regenwoud behouden blijft maar ook de kwaliteit van de koffie verder verbeterd wordt. Het Orang Utan Coffee Project loopt sinds 1999 in partnership met de regering van Indonesië via het Sumatra Orang Utan Conservation Programme (SOCP) waar ook nog een € 0,50 per kilo naartoe gaat.</p>
          </p>De Tropische regenwouden van Sumatra bieden de ideale omstandigheden voor de aanbouw van specialty koffie. In de Gayo hooglanden van Centraal – Ache, net noordelijk van de evenaar ligt op 900 tot 2400m hoogte het beste aanbouwgebied van Zuid-Oost Azië. Bijzonder geschikt zijn de steile krater-hellingen waar in de mist en nevel van het tropische regenwoud een (h)eerlijke Arabica koffie langzaam rijpt. Dit is de plaats waar onze Sumatra Orang Utan koffie zijn oorsprong vindt.</p>
          <p>De Orang Utan koffie komt uitsluitend van kleine, familie-plantages die ecologisch verantwoord koffie verbouwen. Daarbij is het van groot belang dat deze familie-plantages een contract ondertekenen waarbij ze actief betrokken worden bij het beschermen van het tropisch regenwoud en de flora en fauna in het regenwoud.</p>
          <p>Het waarborgen van de kwaliteit is cruciaal om een dergelijk project te laten slagen. Uitsluitend en alleen wanneer onze klanten de kwaliteit  van onze Orang Utan koffie waarderen kan er echt een verschil gemaakt worden.</p>
          <p>Het is daarom ook niet meer dan logisch dat er constante kwaliteitscontroles plaatsvinden om er voor te zorgen dat ook deze Direct Trade koffie aan de allerhoogste kwaliteitsnormen voldoet. Hiervoor wordt op de plantages zelf samengewerkt met stichting YEL (Yayasan Ekosistem Lestari). Deze stichting maakt zich sterk voor een duurzaam, verantwoord ecosysteem op een manier die impact en verbetering biedt voor de gehele omgeving. Een vertegenwoordiger van YEL bezoekt samen met Regina Frey (de coordinator van het Orang Utang Coffee Project) en leden van het Gayo Cuppers Team tenminste 3 keer per jaar de plantages. Hierbij worden controles gedaan van direct na de oogst tot en met het moment van het inschepen van de koffie. Een constante focus op kwaliteit zoals wij dit graag zien</p>
          <br />
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      costa_rica: { // ----- COSTA RICA ----- //
        description:
        `
          <p>Deze koffie uit Costa Rica  kenmerkt zich door een volle, complexe body en een intense geur. Een heerlijke koffie met de zoete tonen van rood fruit, pruimen en chocolade in de nasmaak. Een lekkere, plezierige koffie om de hele dag door te drinken. Heerlijk als espresso, maar ook prima geschikt voor filterkoffie.</p>
        `,
        data:
        `
          <h2>EIGENSCHAPPEN:</h2>
          <span>Land van herkomst: Costa Rica</span><br />
          <span>Regio: Tarrazu - Carrizal community</span><br />
          <span>Producent: smallholder farmers</span><br />
          <span>Hoogte: 1.600-1.800m</span><br />
          <span>Variëteit: Catuai, Caturra</span>
        `,
        information:
        `
          <p>In Costa Rica wordt al sinds 1779 koffie verbouwd. Een van de bekendste koffieproducerende regio’s in Costa Rica is zonder twijfel de Tarrazu provincie waar de rijke vulkaangronden en omringende bergen een voedingsrijk en beschermde omgeving vormen voor het aanplanten van hoogwaardige arabica koffies.</p>
          <br />
          <p>De regio Tarrazu produceert enkele van de beste koffiesoorten van Costa Rica. De Stille Oceaan heeft een sterke invloed op het klimaat met twee zeer verschillende seizoenen: het regenseizoen dat loopt van juni tot november en het droge seizoen van december tot mei.</p>
          <br /><p>Deze koffie is afkomstig uit Carrizal, een kleine gemeenschap in de buurt van de stad San Isidro. Carrizal ligt op ongeveer 1600 meter boven zeeniveau waar groene berglandschappen en koffieplantages in overvloed zijn. Dit lot bestaat is samengesteld uit koffies afkomstig van 56 smallholder farmers. Koffieproductie is de basis van de economie van deze. De meeste producenten werken met hun gezin op hun boerderij.</p>
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      espresso_grande_alta: { // ----- ESPRESSO GRANDE ALTA ----- //
        description:
        `
          <p>Hé koffieliefhebber, weet jij al wat je vandaag gaat drinken? Maak kennis met de Espresso Grande Alta - de perfecte start van je dag!</p>
          <p>Deze heerlijke espresso is zo lekker, dat je er gewoon niet genoeg van kunt krijgen. Met zijn volle, zachte en romige smaak is het net alsof je een stukje melkchocolade in je mond laat smelten. Gecombineerd met tonen van amandelen en bruine suiker, krijg je een espresso waar je gewoonweg niet omheen kunt.</p>
          <p>Dankzij de lage zuurgraad en de zachte, romige body, is dit een koffie die je de hele dag door kunt drinken. Of je nu 's ochtends wakker wordt, of 's middags een momentje voor jezelf neemt - deze espresso is altijd een schot in de roos.</p>
          <p>Overigens is de Espresso Grande alta ook heerlijk als lungo of als basis voor cappuccino! Dus waar wacht je nog op?</p>
        `,
        data:
        `
          <h3>EIGENSCHAPPEN:</h3>
          <span>Land van herkomst: Brazilië</span><br />
          <span>Regio: Manhuacu - Matas de Minas</span><br />
          <span>Plantage: Fazenda Araujo</span><br />
          <span>Hoogte: 1000m</span><br />
          <span>Verwerking: Pulped Natural</span><br />
          <span>Variëteit: Mundo Novo</span>
        `,
        information:
        `
          <h3>Espresso Grande Alta: Superieure Koffie uit Brazilië</h3>
          <br />
          <p>Ben je op zoek naar een uitzonderlijke koffie-ervaring? Dan moet je de Espresso Grande Alta van Fazendo Araujo proberen! Deze koffie komt uit Manhaucu in Matas de Minas, Brazilië, waar hij verbouwd wordt op een indrukwekkende hoogte van 1000 meter.</p>
          <p>De familie Araújo zit al sinds 1976 in het koffievak, toen grootvader een stukje land kocht om zijn eerste koffieplantjes te verbouwen. Ondanks de uitdagingen die de hoogte en het terrein met zich meebrachten, was hij vastbesloten om topkwaliteit koffie te produceren. En dat is gelukt!</p>
          <p>Tegenwoordig wordt de plantage gerund door de derde generatie, met Rafael Araújo aan het roer. Hij combineert familietradities met innovatieve technieken om de allerbeste koffie te creëren. Sinds 2014 hebben ze hun droogtechnieken verfijnd en superieure microlots geïdentificeerd. Het resultaat? In 2017 en 2019 haalden hun 'pulped natural' specialty lots de finale van de prestigieuze Ernesto Illy koffiewedstrijd in New York!</p>
          <p>Dus als je een kop koffie wilt die je versteld doet staan, probeer dan de Espresso Grande Alta. Een slokje Braziliaanse passie en vakmanschap in je kopje!</p>
          <br />
          <h3>Matas de Minas</h3>
          <br />
          <p>Matas de Minas bestaat uit 63 gemeenten en ligt in het oosten van de staat Minas Gerais. De regio Matas de Minas wordt gereguleerd door de Matas de Minas Coffee Association Council, een non-profitorganisatie met vertegenwoordigers van de wetenschappelijke, educatieve en culturele gemeenschappen. Het doel van de Raad is om de kwaliteit, smaakdiversiteit en natuurlijke duurzaamheid van de koffieproductie van Matas de Minas te promoten en te streven naar een duurzame ontwikkeling van de regio. Ze bereiken dit door kennis en trainingen te verspreiden onder producenten en door de collectieve waarde voor gemeenschappen en bedrijven in de regio te versterken.</p>
          <p>De koffieproductie in deze regio is van nature duurzaam en bestaat voornamelijk uit familiale landbouw. Veel producerende families in Matas de Minas verbouwen al meer dan 100 jaar koffie. Ze gebruiken ambachtelijke en traditionele technieken en produceren koffies van bijzonder hoge kwaliteit. Dit resulteert in koffies met een diversiteit aan nuances die zeer gewaardeerd worden in belangrijke nationale en internationale koffiewedstrijden.</p>
        `,
        reviews:
        `
          <p>Nog geen beoordelingen bischikbaar.</p>
        `,
      },
      total: 'Totaal',
      weight: 'Gewicht',
      amount: 'Aantal',
      title: {
        data: 'Gegevens',
        information: 'Meer informatie',
        reviews: 'Reviews',
      },
      infobar: {
        quality: {
          title: "Kwaliteit",
          subtext:
          `
            <span><strong>Duurzaam</strong>, eerlijk en verantwoord</span><br />
            <span>100% versheidsgarantie: nooit ouder</span><br />
            <span>dan 3 dagen</span>
          `
        },
        service: {
          title: "Service",
          subtext:
          `
            <span>Levering vanaf <strong>250 gram</strong> koffiebonen</span><br />
            <span>of gemalen koffie</span>
          `
        },
        dispatch: {
          title: "Verzending",
          subtext:
          `
            <span>Vóór <strong>15:00 uur</strong> besteld, morgen in</span><br />
            <span>huis. €3,95 verzendkosten en <strong>gratis</strong></span><br />
            <span><strong>bezorging</strong> vanaf € 45,-</span>
          `
        }
      }
    },
  },
}

// Create i18n instance with locale and translations
const i18n = createI18n({
  locale: 'en', // Set the default locale
  fallbackLocale: 'nl', // Fallback to this if the translation is missing
  messages, // Set the locale messages
})

export default i18n
