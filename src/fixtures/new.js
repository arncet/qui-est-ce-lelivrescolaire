const news = [
  { id: 2, name: 'Arnaud Cetoute', job: 'Créateur du jeu, développeur freelance<br/>💻 🎮 🐢', picture: 'images/pictures/new/Arnaud_Cetoute_new.png' },
  { id: 3, name: 'Audrey Boulanger', job: 'Directrice marketing<br/>🏃‍♀️ 🤗 📞', picture: 'images/pictures/new/audrey-support.jpeg' },
  { id: 4, name: 'Clément Teyssier', job: 'Responsable de l’édition numérique<br/>🎉 🍻 🎊 🎬', picture: 'images/pictures/new/clement-communaute.jpeg' },
  { id: 5, name: 'Elanzize Assoumani', job: 'Product Manager - SA<br/>🏀 👟 🦆', picture: 'images/pictures/new/Elanzize_Assoumani_new.png' },
  { id: 6, name: 'Emilie Blanchard', job: 'Directrice des contenus<br/>👸 ✍🏻 📚', picture: 'images/pictures/new/emilie.jpg' },
  { id: 9, name: 'Julie Meister', job: 'Directrice artistique sciences<br/>👩‍🎨 🧮 🖍', picture: 'images/pictures/new/Julie_Meister_new.jpeg' },
  { id: 11, name: 'Noam Taïeb', job: 'Directeur éditorial littérature jeunesse<br/>📔 👶 🐥', picture: 'images/pictures/new/noam.png' },
  { id: 12, name: 'Raphael Taïeb', job: 'Président<br/>🤴 🚴‍ 🏆', picture: 'images/pictures/new/raph.jpg' },
  { id: 13, name: 'Véronique Joly', job: 'Responsable administratif et gestion<br/>🧚‍ 📆 🦹', picture: 'images/pictures/new/Vero_new.JPG' },
  { id: 15, name: 'Virgile Lahu', job: 'Directeur éditorial de Sciences<br/>🧮 📈 🏸', picture: 'images/pictures/new/virgile-de-mat.jpg' },
  { id: 17, name: 'Maximilien Derrier', job: 'DevOps<br/>🧙 🧝 🧔 💻 🦸‍ 🤓 🖨 👨‍🚒 🧞‍ 👹 👨‍🚀 🛰 🚀 📡', picture: 'images/pictures/new/max-dev.jpeg' },
  { id: 22, name: 'Phillippe De Sousa', job: 'Directeur d’ouvrage Mathématiques<br/>🧮 𝑓 🛶', picture: 'images/pictures/new/phillippe.png' },
  { id: 23, name: 'Pierre-Michel Sailhan', job: 'Auteur de Classiques<br/>📚 📕 🧔', picture: 'images/pictures/new/pm.jpg' },
  { id: 25, name: 'Clémentine Gauthier', job: 'Éditrice des Classiques<br/>🧀 🏃‍♀️ 🚲', picture: 'images/pictures/new/clementine.jpg' },
  { id: 27, name: 'Jessica Dubuisson', job: 'Directrice éditoriale des Langues vivantes<br/>🍻 😎 💥', picture: 'images/pictures/new/jessica.jpg' },
  { id: 28, name: 'Mellie Chapatte', job: `Assistante éditoriale d'anglais<br/>🌸 🍬 🍣 <img src="${process.env.PUBLIC_URL}/images/ahhhhhhhh.gif" style="width:26px; vertical-align: middle" />`, picture: 'images/pictures/new/Mellie_Chapatte_new.jpg' },
  { id: 30, name: 'David Dechaux', job: 'Motion designer<br/>🍺 ☕ 🍕', picture: 'images/pictures/new/David_Dechaux_new.png' },
  { id: 32, name: 'Alexane Biot', job: 'Chef de projet marketing opérationnel<br/>🏃‍♀️ ⛰️ 🍫', picture: 'images/pictures/new/Alexane_Biot_new.jpg' },
  { id: 33, name: 'Dylan Pissard', job: 'Responsable de la Brigade d’Accompagnement des Profs (BAP)<br/>⛷️ 🎢 🐶 🍆', picture: 'images/pictures/new/Dylan_Pissard_new.png' },
  { id: 34, name: 'Dorian Gentine', job: 'Développeur web et CHO - SD<br/>💻 🍙 🥊', picture: 'images/pictures/new/Dorian_Gentine_new2.jpg' },
  { id: 35, name: 'Chloé Van Santy', job: 'Directrice artistique sciences humaines<br/>🦄 ⛰️ 🧀', picture: 'images/pictures/new/chloe-infog.jpg' },
  { id: 36, name: 'Guillaume Côte', job: 'Éditeur numérique sciences<br/>📉 🤡 🧮', picture: 'images/pictures/new/Guillaume_Cote_new.png' },
  { id: 37, name: 'Jean-Sébastien Baklouti', job: 'Lead Dev - SA<br/>💻 🍻 🎭', picture: 'images/pictures/new/JS_new.jpg' },
  { id: 38, name: 'Camille Lacour', job: 'Assistante éditoriale scientifique<br/>🌻 📖 🌊', picture: 'images/pictures/new/Camille_Lacour_new.jpg' },
  { id: 39, name: 'Marya Colas', job: 'Graphiste<br/>👩‍🦰 🌏 😬', picture: 'images/pictures/new/Marya_Colas_new.jpg' },
  { id: 40, name: 'Romain Binovsky', job: 'Ingénieur QA Junior<br/>🫡 😳 🫠', picture: 'images/pictures/new/Romain_Binovsky_new2.jpg' },
  { id: 41, name: 'Jade Bordat', job: 'Assistante éditoriale des Classiques<br/>🍫 🤓 🇮🇹', picture: 'images/pictures/new/Jade_Bordat_new.jpg' },
  { id: 42, name: 'Emma Martin', job: 'Business Developer<br/>💜 🍟 📚', picture: 'images/pictures/new/Emma_Martin_new.jpg' },
  { id: 44, name: 'Lison Cordier', job: 'Assistante éditoriale de français<br/>🌻 🍎 💫', picture: 'images/pictures/new/Lison_Cordier_new.JPG' },
  { id: 45, name: 'Antoine Cozzucoli', job: 'Lead Dev Fullstack - SC<br/>🍻 ☀️ 🎵', picture: 'images/pictures/new/Antoine_Cozzucoli_new.jpg' },
  { id: 46, name: 'Margaux Gély', job: 'Cheffe de projet communauté<br/>🥂 🪡 🏖️', picture: 'images/pictures/new/Margaux_Gely_new.jpg' },
  { id: 47, name: 'Lisa Poncept', job: 'Éditrice en Français<br/>🫖 ✨ 🍫', picture: 'images/pictures/new/Lisa_Poncept_new.jpg' },
  { id: 48, name: 'Mathilde Laporte', job: 'Assistante polyvalente<br/>🐝 🍁 🧄', picture: 'images/pictures/new/Mathilde_Laporte_new.JPG' },
  { id: 49, name: 'Sandrine Lassere', job: 'Directrice éditoriale de Sciences Humaines<br/>✍️ 🍮 🐱', picture: 'images/pictures/new/Sandrine_Lassere_new.jpg' },
  { id: 50, name: 'Caroline Blanc Feracci', job: `Assistante éditoriale d'anglais<br/>🌅 🐶 ⚽`, picture: 'images/pictures/new/Caroline_Blanc_Feracci_new.PNG' },
  { id: 51, name: 'Alexia Vicente', job: `Graphiste & édito numérique<br/>✨ 🤸‍♀️ 🎨 🐱`, picture: 'images/pictures/new/Alexia_Vicente_new.jpg' },
  { id: 52, name: 'Célia Jésupret', job: `Éditrice d'espagnol<br/>🧉 🌻 🧡`, picture: 'images/pictures/new/Celia_Jesupret_new.jpeg' },
  { id: 31, name: 'Pauline Perrenoud', job: `Motion designer<br/>🌈 🍣 💄`, picture: 'images/pictures/new/Pauline_Perrenoud_new.jpeg' },
  { id: 1, name: 'Thomas Pottier', job: `Product Manager - SD<br/>🦖 💭 🍻`, picture: 'images/pictures/new/Thomas.Pottier_new.png' },
  { id: 7, name: 'Yohann Rabatel', job: `Lead Dev - SD<br/>🎥 🍻 📚`, picture: 'images/pictures/new/Yohann_Rabatel_new.jpg' },
  { id: 8, name: 'Eléna Sonntag', job: `Product designer<br/>✨ 🎨 💃 🐱 🧁 ✈️`, picture: 'images/pictures/new/Elena_Sonntag_new.JPG' }, 
  { id: 10, name: 'Jonathan Biteau (et 🦤)', job: `Développeur - SC<br/>🍻 🌯 🍻`, picture: 'images/pictures/new/Jonathan_Biteau_new.jpg' }, 
  { id: 14, name: 'Matthieu Brunerie', job: `Responsable QA<br/>🐛 🤿 🕵️‍♂️`, picture: 'images/pictures/new/Matthieu_Brunerie_new.jpg' }, 
  { id: 16, name: 'Evan Wichlarz', job: `Développeur - SA<br/>₿ 📈 🍻`, picture: 'images/pictures/new/Evan_Wichlarz_new.png' }

]

export default news
