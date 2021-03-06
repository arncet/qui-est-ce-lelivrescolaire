const allNews = [
  { id: 1, name: 'Alejandra Adeikalam', job: 'Directrice artistique<br/>👩‍🎨 🎨 🖌', picture: 'images/pictures/new/alejandra.jpg' },
  { id: 2, name: 'Arnaud Cetoute', job: 'Développeur web front-end<br/>💻 🎮 🐢', picture: 'images/pictures/new/arnaud-dev.png' },
  { id: 3, name: 'Audrey Boulanger', job: 'Customer happiness<br/>😊 🤗 📞', picture: 'images/pictures/new/audrey-support.jpeg' },
  { id: 4, name: 'Baptiste Bouché',  job: 'Support<br/>☎️ 🇯🇵 🎩', picture: 'images/pictures/new/baptiste-support.jpg' },
  { id: 5, name: 'Catherine Benini', job: 'Graphiste Anglais<br/>👩‍🎨 🇬🇧 📓󠁧󠁢󠁥', picture: 'images/pictures/new/catherine-pao-ang.png' },
  { id: 6, name: 'Celine Grauby', job: 'Directrice éditoriale Géographie<br/>🌍 🍲 🐕', picture: 'images/pictures/new/celine-de-geo.jpg' },
  { id: 7, name: 'Charline Pilon', job: `Community management<br/>🤗 👩‍🏫 <img src="${process.env.PUBLIC_URL}/images/emoji-charline.gif" style="width:26px; vertical-align: middle" />`, picture: 'images/pictures/new/charline-cm.jpg' },
  { id: 8, name: 'Clément Teyssier', job: 'Animateur de la communauté<br/>🎉 🎊 🎬', picture: 'images/pictures/new/clement-communaute.jpeg' },
  { id: 9, name: 'Elanzize Assoumani', job: 'Support<br/>☎️ 👟 ⌚️', picture: 'images/pictures/new/elanzize-support.jpg' },
  { id: 10, name: 'Elsa Kendzierski', job: 'Community management<br/>🤗 👩‍🏫 💬', picture: 'images/pictures/new/elsa-cm.jpg' },
  { id: 11, name: 'Emilie Blanchard', job: 'Directrice des contenus<br/>👸 ✍🏻 📚', picture: 'images/pictures/new/emilie.jpg' },
  { id: 12, name: 'Fabien Pinel', job: 'Développeur web front-end<br/>💻 🚐 🚴‍', picture: 'images/pictures/new/fabien-dev.png' },
  { id: 13, name: 'Fanny Blanchard', job: 'Directrice éditoriale Physique-Chimie<br/>👾 💠 🔮', picture: 'images/pictures/new/fanny.png' },
  { id: 14, name: 'Guillaume Chambard', job: 'Développeur web front-end/back-end<br/>🧔 💻 🍣', picture: 'images/pictures/new/guillaume-dev.jpg' },
  { id: 15, name: 'Hugo Pantecouteau', job: 'Directeur éditorial SVT<br/>🐸 🌿 🔬', picture: 'images/pictures/new/hugo-de-svt.jpeg' },
  { id: 16, name: 'Joëlle Dutreilly', job: 'Graphiste SVT<br/>👩‍🎨 🌿 🧘', picture: 'images/pictures/new/joelle-pao-svt.jpg' },
  { id: 17, name: 'Jonathan Banon', job: 'Directeur technique<br/>🖥 🤓 🖨', picture: 'images/pictures/new/jonathan.png' },
  { id: 18, name: 'Julia Poirier', job: 'Directrice éditoriale Anglais<br/>🎡 🇬🇧 🇨🇳󠁧󠁢󠁥', picture: 'images/pictures/new/julia-de-ang.jpeg' },
  { id: 19, name: 'Julie Meister', job: 'Graphiste Maths<br/>👩‍🎨 🧮 🖍', picture: 'images/pictures/new/julie-m-pao-mat.jpg' },
  { id: 20, name: 'Julie Sardin', job: `Directrice éditoriale Histoire<br/>🏰 🗽<img src="${process.env.PUBLIC_URL}/images/sardin.png" style="width:26px; vertical-align: middle" />`, picture: 'images/pictures/new/julie-s-de-his.jpg' },
  { id: 21, name: 'Laura Dinin', job: 'Chef de projet web<br/>📱 💻 ⚽️', picture: 'images/pictures/new/laura-produit.jpg' },
  { id: 22, name: 'Lionel Douthe', job: "Directeur d'ouvrage Physique-Chimie<br/>👨🏻‍🔬 🔭 👓", picture: 'images/pictures/new/lionel.png' },
  { id: 23, name: 'Lisa Berkani', job: 'Chef de projet web<br/>📱 💻 👩‍🎓', picture: 'images/pictures/new/lisa-produit.png' },
  { id: 24, name: 'Maël Joyeux', job: "Directrice d'ouvrage Anglais<br/>🤶 🇬🇧 😃", picture: 'images/pictures/new/mael.jpg' },
  { id: 25, name: 'Maud Bernier', job: 'Directrice éditoriale Espagnol<br/>💃🏻 🇪🇸 🕺🏻', picture: 'images/pictures/new/maud-de-esp.jpg' },
  { id: 26, name: 'Nelly Babillon', job: 'Infographiste<br/>👩‍🎨 🐥 🎍', picture: 'images/pictures/new/nelly.JPG' },
  { id: 27, name: 'Noam Taïeb', job: 'Directeur éditorial littérature jeunesse<br/>📔 👶 🐥', picture: 'images/pictures/new/noam.png' },
  { id: 28, name: 'Oliver Tolfts', job: 'Assistant éditorial de PC<br/>👨‍🔬 ⚗️ 🤪', picture: 'images/pictures/new/oliver-assistant-edito.png' },
  { id: 29, name: 'Raphael Taïeb', job: 'Président<br/>🤴 🚴‍ 🏆', picture: 'images/pictures/new/raph.jpg' },
  { id: 30, name: 'Robin Lespagnol', job: 'Business developer<br/>🤑 💰 🇪🇸', picture: 'images/pictures/new/robin-bizdev.jpg' },
  { id: 31, name: 'Roxane Bonnardel', job: 'Assistante éditoriale Histoire-Géo<br/>👩‍🎓 🏰 🗺', picture: 'images/pictures/new/roxane-assistant-edito.jpg' },
  { id: 32, name: 'Sophie Girard', job: 'Graphiste SES<br/>👩‍🎨 🎨 💵', picture: 'images/pictures/new/sophie.png' },
  { id: 33, name: 'Véronique Joly', job: 'Assistante de gestion<br/>🧚‍ 📆 🦹', picture: 'images/pictures/new/vero.jpg' },
  { id: 34, name: 'Bérenger Ciras', job: 'Business developer<br/>🕴 💰 🚅', picture: 'images/pictures/new/berenger-bizdev.jpeg' },
  { id: 35, name: 'Anne Weiss', job: 'Directrice éditoriale SES<br/>💸 🏓 🤸‍', picture: 'images/pictures/new/anne-de-ses.jpg' },
  { id: 36, name: 'Virgile Lahu', job: 'Directeur éditorial Maths<br/>🧮 📈 🏸', picture: 'images/pictures/new/virgile-de-mat.jpg' },
  { id: 37, name: 'Pierre André Pailler', job: 'Directeur éditorial Français<br/>📙 📓 📚', picture: 'images/pictures/new/pierre-andre-de-fr.png' },
  { id: 38, name: 'Jef Bussiere', job: 'Directeur éditorial numérique<br/>🖥 🏓 🎮', picture: 'images/pictures/new/jef.png' },
  { id: 39, name: 'Mélina Boyer', job: 'Assistante éditoriale<br/>👩‍🎓 🏃🏻‍ 📕', picture: 'images/pictures/new/melina-assistant-edito.jpeg' },
  { id: 40, name: 'Camille Berthet', job: 'Graphiste Histoire<br/>👩‍🎨 🏰 ➰', picture: 'images/pictures/new/camille-pao-his.jpg' },
  { id: 41, name: 'Chloé Van santy', job: 'Infographiste<br/>👩‍🎨 👩‍🎓 🌈', picture: 'images/pictures/new/chloe-infog.jpg' },
  { id: 42, name: 'Marlène Zablocki', job: 'Graphiste Physique-Chimie<br/>👩‍🎨 🖌 🧪', picture: 'images/pictures/new/marlene-pao-pc.jpg' },
  { id: 43, name: 'Elisabeth Frouart', job: 'Graphiste Français<br/>👩‍🎨 📚 ✏️', picture: 'images/pictures/new/elisabeth-pao-fr.jpg' },
  { id: 44, name: 'Alice Derammelaere', job: 'Graphiste Géographie<br/>👩‍🎨 🗺 🚢', picture: 'images/pictures/new/alice-pao-geo.jpg' },
  { id: 45, name: 'Manon Beligni', job: 'Graphiste Espagnol<br/>👩‍🎨 🇪🇸 💃🏻', picture: 'images/pictures/new/manon-pao-esp.jpg' },
  { id: 46, name: 'Anaëlle Dos santos', job: 'Infographiste<br/>👩‍🎨 😸 🖋', picture: 'images/pictures/new/anaelle-infog.jpg' },
  { id: 47, name: 'Valentin Coquillat', job: 'Graphiste Maths<br/>👨‍🎨 𝑓 📈', picture: 'images/pictures/new/valentin-pao-mat.png' },
  { id: 48, name: 'Maximilien Derrier', job: 'DevOps<br/>🧙 🧝 🧔 💻 🦸‍ 🤓 🖨 👨‍🚒 🧞‍ 👹 👨‍🚀 🛰 🚀 📡', picture: 'images/pictures/new/max-dev.jpeg' },
  { id: 49, name: 'Thomas Schell', job: 'Développeur web front-end<br/>💻 🏇🏻 🎾', picture: 'images/pictures/new/thomas-dev.png' },
  { id: 50, name: 'Julie Nginn', job: 'Développeur web front-end<br/>💻 👩‍🎓 🍱', picture: 'images/pictures/new/julie-n-dev.jpg' },
  { id: 51, name: 'Julien Seznec', job: 'Chercheur machine learning<br/>👨‍🔬 🤖 👾', picture: 'images/pictures/new/julien.jpg' },
  { id: 52, name: 'Sergiy Bondaryev', job: 'Développeur web back-end<br/>💻 🇺🇦 💪', picture: 'images/pictures/new/serguy-dev.jpg' },
  { id: 53, name: 'Vincent Bourgeois', job: 'Développeur web back-end<br/>💻 💪 🏋🏻‍', picture: 'images/pictures/new/vincent-dev.jpg' },
  { id: 54, name: 'Cédric Soubrié', job: 'Développeur mobile iOS<br/>📱 🎾 🤓', picture: 'images/pictures/new/cedric-dev.jpg' },
  { id: 55, name: 'Frédéric Adda', job: 'Développeur mobile iOS<br/>📱 🤼‍ 🥋', picture: 'images/pictures/new/fred.png' },
  { id: 56, name: 'Pierre-Luc Paour', job: 'Développeur mobile Android<br/>📱 🤖 💻', picture: 'images/pictures/new/pierre-luc-dev.jpg' },
  { id: 57, name: 'Laurence Souvignet', job: 'Directrice d’ouvrage Espagnol<br/>💃🏻 🇪🇸 🕺🏻', picture: 'images/pictures/new/laurence.jpg' },
  { id: 58, name: 'Mathilde Serra', job: 'Webdesigner<br/>👩‍🎨 💻 🎨', picture: 'images/pictures/new/mathilde.jpg' },
  { id: 59, name: 'Phillippe De Sousa', job: 'Directeur d’ouvrage Mathématiques<br/>🧮 𝑓 🛶', picture: 'images/pictures/new/phillippe.png' },
  { id: 59, name: 'Pierre-Michel Sailhan', job: 'Directeur d’ouvrage Français<br/>📚 📕 🧔', picture: 'images/pictures/new/pm.jpg' },
  { id: 60, name: 'Marc-Émilien Poncet', job: 'Assistant édito<br/>📚 📕 📖', picture: 'images/pictures/new/marco-assistant-edito.jpg' },
  { id: 61, name: 'Amélie Marc', job: 'Assistante édito<br/>📚 📖 📕', picture: 'images/pictures/new/amelie-assistant-edito.jpg' },
  { id: 62, name: 'Baptiste Fray', job: 'Directeur d’ouvrage Physique-Chimie<br/>👨‍🔬 🧪 ⚗️', picture: 'images/pictures/new/baptiste-fray.png' },
  { id: 63, name: 'Claire Olive', job: 'Directeur d’ouvrage SVT<br/>🌸 🌿 🍃', picture: 'images/pictures/new/claire-olive.jpg' },
  { id: 64, name: 'Aure Line Lecoq', job: 'Infographiste<br/>👩‍🎨 🎨 🖌', picture: 'images/pictures/new/aureline_lecoq.jpg' },
  { id: 65, name: 'Mellie Chapatte', job: `Lead éditrice numérique<br/>🌸 🍬 <img src="${process.env.PUBLIC_URL}/images/ahhhhhhhh.gif" style="width:26px; vertical-align: middle" />`, picture: 'images/pictures/new/mellie.jpg' }
]

export default allNews
