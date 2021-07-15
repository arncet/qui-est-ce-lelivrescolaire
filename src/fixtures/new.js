const news = [
  { id: 1, name: 'Alejandra Adeikalam', job: 'Directrice artistique<br/>👩‍🎨 🎨 🖌', picture: 'images/pictures/new/alejandra.jpg' },
  { id: 2, name: 'Arnaud Cetoute', job: 'Développeur web front-end<br/>💻 🎮 🐢', picture: 'images/pictures/new/arnaud-dev.png' },
  { id: 3, name: 'Audrey Boulanger', job: 'Customer happiness<br/>😊 🤗 📞', picture: 'images/pictures/new/audrey-support.jpeg' },
  { id: 4, name: 'Baptiste Bouché',  job: 'Support<br/>☎️ 🇯🇵 🎩', picture: 'images/pictures/new/baptiste-support.jpg' },
  { id: 7, name: 'Charline Pilon', job: 'Community management<br/>🤗 👩‍🏫 <img src="images/emoji-charline.gif" style="width:26px; vertical-align: middle; position: relative; bottom: 4px" />', picture: 'images/pictures/new/charline-cm.jpg' },
  { id: 8, name: 'Clément Teyssier', job: 'Animateur de la communauté<br/>🎉 🎊 🎬', picture: 'images/pictures/new/clement-communaute.jpeg' },
  { id: 9, name: 'Elanzize Assoumani', job: 'Support<br/>☎️ 👟 ⌚️', picture: 'images/pictures/new/elanzize-support.jpg' },
  { id: 10, name: 'Elsa Kendzierski', job: 'Community management<br/>🤗 👩‍🏫 💬', picture: 'images/pictures/new/elsa-cm.jpg' },
  { id: 11, name: 'Emilie Blanchard', job: 'Directrice des contenus<br/>👸 ✍🏻 📚', picture: 'images/pictures/new/emilie.jpg' },
  { id: 13, name: 'Fanny Blanchard', job: 'Directrice éditoriale Physique-Chimie<br/>👾 💠 🔮', picture: 'images/pictures/new/fanny.png' },
  { id: 16, name: 'Joëlle Dutreilly', job: 'Graphiste SVT<br/>👩‍🎨 🌿 🧘', picture: 'images/pictures/new/joelle-pao-svt.jpg' },
  { id: 17, name: 'Jonathan Banon', job: 'Directeur technique<br/>🖥 🤓 🖨', picture: 'images/pictures/new/jonathan.png' },
  { id: 18, name: 'Julia Poirier', job: 'Directrice éditoriale Anglais<br/>🎡 🇬🇧 🇨🇳󠁧󠁢󠁥', picture: 'images/pictures/new/julia-de-ang.jpeg' },
  { id: 19, name: 'Julie Meister', job: 'Graphiste Maths<br/>👩‍🎨 🧮 🖍', picture: 'images/pictures/new/julie-m-pao-mat.jpg' },
  { id: 21, name: 'Laura Dinin', job: 'Chef de projet web<br/>📱 💻 ⚽️', picture: 'images/pictures/new/laura-produit.jpg' },
  { id: 24, name: 'Maël Joyeux', job: "Directrice d'ouvrage Anglais<br/>🤶 🇬🇧 😃", picture: 'images/pictures/new/mael.jpg' },
  { id: 26, name: 'Nelly Babillon', job: 'Infographiste<br/>👩‍🎨 🐥 🎍', picture: 'images/pictures/new/nelly.JPG' },
  { id: 27, name: 'Noam Taïeb', job: 'Directeur éditorial littérature jeunesse<br/>📔 👶 🐥', picture: 'images/pictures/new/noam.png' },
  { id: 29, name: 'Raphael Taïeb', job: 'Président<br/>🤴 🚴‍ 🏆', picture: 'images/pictures/new/raph.jpg' },
  { id: 30, name: 'Robin Lespagnol', job: 'Business developer<br/>🤑 💰 🇪🇸', picture: 'images/pictures/new/robin-bizdev.jpg' },
  { id: 32, name: 'Sophie Girard', job: 'Graphiste SES<br/>👩‍🎨 🎨 💵', picture: 'images/pictures/new/sophie.png' },
  { id: 33, name: 'Véronique Joly', job: 'Assistante de gestion<br/>🧚‍ 📆 🦹', picture: 'images/pictures/new/vero.jpg' },
  { id: 35, name: 'Anne Weiss', job: 'Directrice éditoriale SES<br/>💸 🏓 🤸‍', picture: 'images/pictures/new/anne-de-ses.jpg' },
  { id: 36, name: 'Virgile Lahu', job: 'Directeur éditorial Maths<br/>🧮 📈 🏸', picture: 'images/pictures/new/virgile-de-mat.jpg' },
  { id: 38, name: 'Jef Bussiere', job: 'Directeur éditorial numérique<br/>🖥 🏓 🎮', picture: 'images/pictures/new/jef.png' },
  { id: 39, name: 'Mélina Boyer', job: 'Assistante éditoriale<br/>👩‍🎓 🏃🏻‍ 📕', picture: 'images/pictures/new/melina-assistant-edito.jpeg' },
  { id: 42, name: 'Marlène Zablocki', job: 'Graphiste Physique-Chimie<br/>👩‍🎨 🖌 🧪', picture: 'images/pictures/new/marlene-pao-pc.jpg' },
  { id: 43, name: 'Elisabeth Frouart', job: 'Graphiste Langues Vivantes<br/>👩‍🎨 🇪🇸 ✏️', picture: 'images/pictures/new/elisabeth-pao-fr.jpg' },
  { id: 46, name: 'Anaëlle Dos santos', job: 'Infographiste<br/>👩‍🎨 😸 🖋', picture: 'images/pictures/new/anaelle-infog.jpg' },
  { id: 48, name: 'Maximilien Derrier', job: 'DevOps<br/>🧙 🧝 🧔 💻 🦸‍ 🤓 🖨 👨‍🚒 🧞‍ 👹 👨‍🚀 🛰 🚀 📡', picture: 'images/pictures/new/max-dev.jpeg' },
  { id: 49, name: 'Thomas Schell', job: 'Développeur web front-end<br/>💻 🏇🏻 🎾', picture: 'images/pictures/new/thomas-dev.png' },
  { id: 50, name: 'Julie Nginn', job: 'Développeuse web front-end<br/>💻 👩‍🎓 🍱', picture: 'images/pictures/new/julie-n-dev.jpg' },
  { id: 51, name: 'Julien Seznec', job: 'Chercheur machine learning<br/>👨‍🔬 🤖 👾', picture: 'images/pictures/new/julien.jpg' },
  { id: 52, name: 'Sergiy Bondaryev', job: 'Développeur web back-end<br/>💻 🇺🇦 💪', picture: 'images/pictures/new/serguy-dev.jpg' },
  { id: 53, name: 'Vincent Bourgeois', job: 'Développeur web back-end<br/>💻 💪 🏋🏻‍', picture: 'images/pictures/new/vincent-dev.jpg' },
  { id: 54, name: 'Cédric Soubrié', job: 'Développeur mobile iOS<br/>📱 🎾 🤓', picture: 'images/pictures/new/cedric-dev.jpg' },
  { id: 56, name: 'Pierre-Luc Paour', job: 'Développeur mobile Android<br/>📱 🤖 💻', picture: 'images/pictures/new/pierre-luc-dev.jpg' },
  { id: 58, name: 'Mathilde Serra', job: 'Webdesigner<br/>👩‍🎨 💻 🎨', picture: 'images/pictures/new/mathilde.jpg' },
  { id: 59, name: 'Phillippe De Sousa', job: 'Directeur d’ouvrage Mathématiques<br/>🧮 𝑓 🛶', picture: 'images/pictures/new/phillippe.png' },
  { id: 59, name: 'Pierre-Michel Sailhan', job: 'Directeur d’ouvrage Français<br/>📚 📕 🧔', picture: 'images/pictures/new/pm.jpg' },
  { id: 64, name: 'Anaïs Payet', job: 'Développeuse mobile iOS<br/>🍍 🤷‍♀️ 🏝', picture: 'images/pictures/new/anais.jpg' },
  { id: 65, name: 'Augustin Debouy', job: 'Support<br/>🍻 🏎 🚄', picture: 'images/pictures/new/augustin.jpeg' },
  { id: 66, name: 'Clementine Gauthier', job: 'Assistante éditoriale<br/>🍺 🏉 🍊', picture: 'images/pictures/new/clementine.jpg' },
  { id: 67, name: 'Eleonore Peres', job: 'Assistante éditoriale<br/>🌳 🐧 🔬', picture: 'images/pictures/new/eleonore.jpg' },
  { id: 68, name: 'Nicolas Perruche-Serda', job: 'Support<br/>🍻 😎 💥', picture: 'images/pictures/new/nicolas.jpg' },
  { id: 69, name: 'Jessica Dubuisson', job: 'Directrice éditoriale Histoire<br/>🍻 😎 💥', picture: 'images/pictures/new/jessica.jpg' },
  { id: 70, name: 'Mellie Chapatte', job: `Lead éditrice numérique<br/>🌸 🍬 <img src="${process.env.PUBLIC_URL}/images/ahhhhhhhh.gif" style="width:26px; vertical-align: middle" />`, picture: 'images/pictures/new/mellie.jpg' }
]

export default news
