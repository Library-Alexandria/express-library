'use strict'

 module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('features', [
            {
                title: "Academica",
                author: "Cicero, Marcus Tullius",
                subjects: "Knowledge, Theory of -- Early works to 1800, Philosophy -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/14970/pg14970.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/14970/14970-h/14970-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Aeschylus' Prometheus Bound and the Seven Against Thebes",
                author: "Aeschylus",
                subjects: "Eteocles, King of Thebes (Mythological character) -- Drama, Polynices (Greek mythological figure) -- Drama, Prometheus (Greek deity) -- Drama, Seven against Thebes (Greek mythology) -- Drama, Thebes (Greece) -- Drama, Tragedies",
                image: "https://www.gutenberg.org/cache/epub/27458/pg27458.cover.small.jpg",
                text: "https://www.gutenberg.org/files/27458/27458-h/27458-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Agesilaus",
                author: "Xenophon",
                subjects: "Agesilaus II, King of Sparta, Classical literature, Greece -- History -- Spartan and Theban Supremacies, 404-362 B.C.",
                image: "https://www.gutenberg.org/cache/epub/1169/pg1169.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1169/1169-h/1169-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Alcestis",
                author: "Euripides",
                subjects: "Alcestis, Queen, consort of Admetus, King of Pherae -- Drama",
                image: "https://www.gutenberg.org/cache/epub/10523/pg10523.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/10523.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Alcibiades I",
                author: "Plato (spurious and doubtful works)",
                subjects: "Alcibiades, Classical literature, Socrates, 470 BC-399 BC, Virtue -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1676/pg1676.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1676/1676-h/1676-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Alcibiades II",
                author: "Plato (spurious and doubtful works)",
                subjects: "Alcibiades, Classical literature, Socrates, 470 BC-399 BC, Virtue -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1677/pg1677.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1677/1677-h/1677-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Amphitryo, Asinaria, Aulularia, Bacchides, Captivi: Amphitryon, The Comedy of Asses, The Pot of Gold, The Two; Bacchises, The Captives",
                author: "Plautus, Titus Maccius",
                subjects: "Latin drama (Comedy), Latin drama (Comedy) -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/16564/pg16564.cover.small.jpg",
                text: "https://www.gutenberg.org/files/16564/16564-h/16564-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "An Account of Egypt",
                author: "Herodotus",
                subjects: "Egypt -- History -- To 332 B.C.",
                image: "https://www.gutenberg.org/cache/epub/2131/pg2131.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/2131/2131-h/2131-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Anabasis",
                author: "Xenophon",
                subjects: "Classical literature, Cyrus, the Younger, approximately 423 B.C.-401 B.C., Greece -- History -- Expedition of Cyrus, 401 B.C., Iran -- History -- To 640",
                image: "https://www.gutenberg.org/cache/epub/1170/pg1170.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1170/1170-h/1170-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Apology",
                author: "Plato",
                subjects: "Classical literature, Philosophy, Ancient, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1656/pg1656.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1656/1656-h/1656-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Apology, Crito, and Phaedo of Socrates",
                author: "Plato",
                subjects: "Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/13726/pg13726.cover.medium.jpg",
                text: "https://www.gutenberg.org/2/9/4/4/29441/29441-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Aristotle on the art of poetry",
                author: "Aristotle",
                subjects: "Aesthetics -- Early works to 1800, Music -- Philosophy and aesthetics, Poetry -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/6763/pg6763.cover.small.jpg",
                text: "https://www.gutenberg.org/files/6763/6763-h/6763-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Aristotle's History of Animals: In Ten Books",
                author: "Aristotle",
                subjects: "Zoology -- Pre-Linnaean works",
                image: "https://www.gutenberg.org/cache/epub/59058/pg59058.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/59058/59058-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Book of illustrations : Ancient Tragedy",
                author: "Sophocles",
                subjects: "Greek drama (Tragedy) -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/19559/pg19559.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/19559.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "C. Sallusti Crispi De Bello Catilinario Et Jugurthino",
                author: "Sallust",
                subjects: "Jugurthine War, 111-105 B.C., Rome -- History -- Conspiracy of Catiline, 65-62 B.C.",
                image: "https://www.gutenberg.org/cache/epub/7402/pg7402.cover.small.jpg",
                text: "https://www.gutenberg.org/files/7402/7402-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cato Maior de Senectute with Introduction and Notes",
                author: "Cicero, Marcus Tullius",
                subjects: "Old age -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/14945/pg14945.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/14945/14945-h/14945-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Charmides",
                author: "Plato",
                subjects: "Classical literature, Ethics -- Early works to 1800, Knowledge, Theory of -- Early works to 1800, Socrates, 470 BC-399 BC, Temperance -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1580/pg1580.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1580/1580-h/1580-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Chinese Literature: Comprising the Analects of Confucius, the Sayings of Mencius, the Shi-King, the Travels of Fâ-Hien, and the Sorrows of Han",
                author: "Faxian",
                subjects: "China -- Literary collections, Chinese literature, Chinese literature -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/10056/pg10056.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/10056.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cicero's Brutus or History of Famous Orators; also His Orator, or Accomplished Speaker.",
                author: "Cicero, Marcus Tullius",
                subjects: "Oratory -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/9776/pg9776.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/9776.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cicero's Tusculan Disputations: Also, Treatises On The Nature Of The Gods, And On The Commonwealth",
                author: "Cicero, Marcus Tullius",
                subjects: "Gods, Roman -- Early works to 1800, Happiness -- Early works to 1800, Political science -- Early works to 1800, Rome -- Politics and government -- 265-30 B.C., State, The -- Early works to 1800, Theology -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/14988/pg14988.cover.small.jpg",
                text: "https://www.gutenberg.org/files/14988/14988-h/14988-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cicero: Letters to Atticus, Vol. 1 of 3",
                author: "Cicero, Marcus Tullius",
                subjects: "Atticus, Titus Pomponius -- Correspondence, Authors, Latin -- Correspondence, Cicero, Marcus Tullius -- Correspondence, Latin letters -- Translations into English, Statesmen -- Rome -- Correspondence",
                image: "https://www.gutenberg.org/cache/epub/58418/pg58418.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/58418/58418-h/58418-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cicero: Letters to Atticus, Vol. 2 of 3",
                author: "Cicero, Marcus Tullius",
                subjects: "Atticus, Titus Pomponius -- Correspondence, Authors, Latin -- Correspondence, Cicero, Marcus Tullius -- Correspondence, Latin letters -- Translations into English, Statesmen -- Rome -- Correspondence",
                image: "https://www.gutenberg.org/cache/epub/50692/pg50692.cover.small.jpg",
                text: "https://www.gutenberg.org/files/50692/50692-h/50692-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cicero: Letters to Atticus, Vol. 3 of 3",
                author: "Cicero, Marcus Tullius",
                subjects: "Atticus, Titus Pomponius -- Correspondence, Authors, Latin -- Correspondence, Cicero, Marcus Tullius -- Correspondence, Latin letters -- Translations into English, Statesmen -- Rome -- Correspondence",
                image: "https://www.gutenberg.org/cache/epub/51403/pg51403.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/51403/51403-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Conspiracy of Catiline and the Jurgurthine War",
                author: "Sallust",
                subjects: "Jugurthine War, 111-105 B.C., Rome -- History -- Conspiracy of Catiline, 65-62 B.C.",
                image: "https://www.gutenberg.org/cache/epub/7990/pg7990.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/7990.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cratylus",
                author: "Plato",
                subjects: "Classical literature, Language and languages -- Philosophy",
                image: "https://www.gutenberg.org/cache/epub/1616/pg1616.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1616/1616-h/1616-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Critias",
                author: "Plato",
                subjects: "Classical literature",
                image: "https://www.gutenberg.org/cache/epub/1571/pg1571.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1571/1571-h/1571-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Crito",
                author: "Plato",
                subjects: "Classical literature, Dialogues, Greek -- Translations into English, Justice -- Early works to 1800, Philosophy, Ancient",
                image: "https://www.gutenberg.org/cache/epub/1657/pg1657.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1657/1657-h/1657-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Cyropaedia: The Education of Cyrus",
                author: "Xenophon",
                subjects: "Biographical fiction, Cyrus, King of Persia, -529 B.C. -- Fiction, Education of princes -- Fiction",
                image: "https://www.gutenberg.org/cache/epub/2085/pg2085.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/2085/2085-h/2085-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "De Amicitia, Scipio's Dream",
                author: "Cicero, Marcus Tullius",
                subjects: "Friendship, Neoplatonism",
                image: "https://www.gutenberg.org/cache/epub/7491/pg7491.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/7491.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "De Bello Gallico and Other Commentaries",
                author: "Caesar, Julius",
                subjects: "Gaul -- History -- Gallic Wars, 58-51 B.C., Rome -- History -- Civil War, 49-48 B.C.",
                image: "https://www.gutenberg.org/cache/epub/10657/pg10657.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/10657.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "De Officiis",
                author: "Cicero, Marcus Tullius",
                subjects: "Ethics -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/47001/pg47001.cover.small.jpg",
                text: "https://www.gutenberg.org/files/47001/47001-h/47001-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Echoes from the Sabine Farm",
                author: "Horace",
                subjects: "Horace -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/13885/pg13885.cover.small.jpg",
                text: "https://www.gutenberg.org/files/13885/13885-h/13885-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Eryxias",
                author: "Plato (spurious and doubtful works)",
                subjects: "Classical literature, Philosophy, Ancient, Virtue, Wealth -- Moral and ethical aspects",
                image: "https://www.gutenberg.org/cache/epub/1681/pg1681.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1681/1681-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Euthydemus",
                author: "Plato",
                subjects: "Classical literature, Logic -- Early works to 1800, Philosophy, Ancient, Socrates, 470 BC-399 BC, Sophists (Greek philosophy)",
                image: "https://www.gutenberg.org/cache/epub/1598/pg1598.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1598/1598-h/1598-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Euthyphro",
                author: "Plato",
                subjects: "Classical literature, Philosophy, Ancient, Piety -- Early works to 1800, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1642/pg1642.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1642/1642-h/1642-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Four Plays of Aeschylus",
                author: "Aeschylus",
                subjects: "Aeschylus -- Translations into English, Mythology, Greek -- Drama",
                image: "https://www.gutenberg.org/cache/epub/8714/pg8714.cover.small.jpg",
                text: "https://www.gutenberg.org/files/8714/8714-h/8714-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Geometrical Solutions Derived from Mechanics; a Treatise of Archimedes",
                author: "Archimedes",
                subjects: "Geometry -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/7825/pg7825.cover.small.jpg",
                text: "undefined",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Gorgias",
                author: "Plato",
                subjects: "Classical literature, Ethics -- Early works to 1800, Political science -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1672/pg1672.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1672/1672-h/1672-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Hellenica",
                author: "Xenophon",
                subjects: "Classical literature, Greece -- History -- Peloponnesian War, 431-404 B.C., Greece -- History -- Spartan and Theban Supremacies, 404-362 B.C.",
                image: "https://www.gutenberg.org/cache/epub/1174/pg1174.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1174/1174-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Hiero",
                author: "Xenophon",
                subjects: "Classical literature, Despotism -- Early works to 1800, Dialogues, Greek -- Translations into English, Hieron I, Tyrant of Syracuse, -467 B.C. or 466 B.C., Simonides, approximately 556 B.C.-467 B.C., Syracuse (Italy) -- Politics and government -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1175/pg1175.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1175/1175-h/1175-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Hippolytus; The Bacchae",
                author: "Euripides",
                subjects: "Euripides -- Translations into English, Mythology, Greek -- Drama",
                image: "https://www.gutenberg.org/cache/epub/8418/pg8418.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/8418/8418-h/8418-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Ion",
                author: "Plato",
                subjects: "Aesthetics, Ancient, Classical literature, Homer. Iliad, Poetics -- History -- To 1500",
                image: "https://www.gutenberg.org/cache/epub/1635/pg1635.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1635/1635-h/1635-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Laches",
                author: "Plato",
                subjects: "Classical literature, Courage -- Early works to 1800, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1584/pg1584.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1584/1584-h/1584-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Laws",
                author: "Plato",
                subjects: "Political science -- Early works to 1800, State, The -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1750/pg1750.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1750/1750-h/1750-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Lesser Hippias",
                author: "Plato (spurious and doubtful works)",
                subjects: "Classical literature, Philosophy, Ancient",
                image: "https://www.gutenberg.org/cache/epub/1673/pg1673.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1673/1673-h/1673-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Letters of Marcus Tullius Cicero",
                author: "Cicero, Marcus Tullius",
                subjects: "Authors, Latin -- Correspondence, Cicero, Marcus Tullius -- Correspondence, Statesmen -- Rome -- Correspondence",
                image: "https://www.gutenberg.org/cache/epub/2812/pg2812.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/2812.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Lysis",
                author: "Plato",
                subjects: "Classical literature, Friendship -- Early works to 1800, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1579/pg1579.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1579/1579-h/1579-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Lysistrata",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Comedies, Greece -- History -- Peloponnesian War, 431-404 B.C. -- Drama, Greek drama (Comedy) -- Translations into English, Lysistrata (Fictitious character) -- Drama, Peace movements -- Drama, Women and peace -- Drama",
                image: "https://www.gutenberg.org/cache/epub/7700/pg7700.cover.small.jpg",
                text: "https://www.gutenberg.org/files/7700/7700-h/7700-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Medea of Euripides",
                author: "Euripides",
                subjects: "Medea, consort of Aegeus, King of Athens (Mythological character) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/35451/pg35451.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/35451/35451-h/35451-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Menexenus",
                author: "Plato",
                subjects: "Classical literature, Rhetoric -- Philosophy, Rhetoric, Ancient",
                image: "https://www.gutenberg.org/cache/epub/1682/pg1682.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1682/1682-h/1682-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Meno",
                author: "Plato",
                subjects: "Classical literature, Ethics -- Early works to 1800, Socrates, 470 BC-399 BC, Virtue -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1643/pg1643.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1643/1643-h/1643-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Odysseus, the Hero of Ithaca: Adapted from the Third Book of the Primary Schools of Athens, Greece",
                author: "Homer",
                subjects: "Classical literature, Classical poetry -- Translations into English, Epic poetry, Greek -- Translations into English, Homer -- Translations into English, Odysseus, King of Ithaca (Mythological character) -- Juvenile literature",
                image: "https://www.gutenberg.org/cache/epub/24856/pg24856.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/24856/24856-h/24856-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Oedipus King of Thebes: Translated into English Rhyming Verse with Explanatory Notes",
                author: "Sophocles",
                subjects: "Oedipus (Greek mythological figure) -- Drama, Tragedies",
                image: "https://www.gutenberg.org/cache/epub/27673/pg27673.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/27673/27673-h/27673-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "On Horsemanship",
                author: "Xenophon",
                subjects: "Classical literature, Horsemanship, Horses -- Training",
                image: "https://www.gutenberg.org/cache/epub/1176/pg1176.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1176/1176-h/1176-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "On Revenues",
                author: "Xenophon",
                subjects: "Classical literature, Finance, Public -- Greece -- Athens -- Early works to 1800, Revenue -- Greece -- Athens -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1179/pg1179.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1179/1179-h/1179-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "On the Nature of Things",
                author: "Lucretius Carus, Titus",
                subjects: "Didactic poetry, Latin -- Translations into English, Philosophy, Ancient -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/785/pg785.cover.small.jpg",
                text: "https://www.gutenberg.org/files/785/785-h/785-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Parmenides",
                author: "Plato",
                subjects: "Classical literature, Dialectic -- Early works to 1800, Ontology -- Early works to 1800, Parmenides, Philosophy, Ancient, Reasoning -- Early works to 1800, Socrates, 470 BC-399 BC, Zeno, of Elea",
                image: "https://www.gutenberg.org/cache/epub/1687/pg1687.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1687/1687-h/1687-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Peace",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Comedies, Greece -- History -- Peloponnesian War, 431-404 B.C. -- Drama, Greek drama (Comedy) -- Translations into English, Peace treaties -- Drama",
                image: "https://www.gutenberg.org/cache/epub/2571/pg2571.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/2571/2571-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Phaedo",
                author: "Plato",
                subjects: "Classical literature, Immortality (Philosophy) -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1658/pg1658.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1658/1658-h/1658-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Phaedrus",
                author: "Plato",
                subjects: "Classical literature, Love -- Early works to 1800, Lysias, Rhetoric -- Early works to 1800, Rhetoric, Ancient, Socrates, 470 BC-399 BC, Soul -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1636/pg1636.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1636/1636-h/1636-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Philebus",
                author: "Plato",
                subjects: "Classical literature, Pleasure -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1744/pg1744.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1744/1744-h/1744-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Plays of Sophocles: Oedipus the King; Oedipus at Colonus; Antigone",
                author: "Sophocles",
                subjects: "Antigone (Mythological character) -- Drama, Greek drama (Tragedy) -- Translations into English, Oedipus (Greek mythological figure) -- Drama, Tragedies",
                image: "https://www.gutenberg.org/cache/epub/31/pg31.cover.small.jpg",
                text: "https://www.gutenberg.org/files/31/31-h/31-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Poetics",
                author: "Aristotle",
                subjects: "Aesthetics -- Early works to 1800, Poetry -- Early works to 1800",
                image: "undefined",
                text: "http://www.gutenberg.org/files/20685/20685-index.html",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Politics: A Treatise on Government",
                author: "Aristotle",
                subjects: "Political science -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/6762/pg6762.cover.small.jpg",
                text: "https://www.gutenberg.org/files/6762/6762-h/6762-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Protagoras",
                author: "Plato",
                subjects: "Classical literature, Protagoras, Socrates, 470 BC-399 BC, Sophists (Greek philosophy), Virtue -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1591/pg1591.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1591/1591-h/1591-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Roman Farm Management: The Treatises of Cato and Varro",
                author: "Cato, Marcus Porcius",
                subjects: "Agriculture -- Early works to 1800, Farm management -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/12140/pg12140.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/12140.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Sophist",
                author: "Plato",
                subjects: "Classical literature, Logic, Ancient, Meaning (Philosophy), Methodology, Ontology, Sophists (Greek philosophy)",
                image: "https://www.gutenberg.org/cache/epub/1735/pg1735.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1735/1735-h/1735-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Specimens of Greek Tragedy — Aeschylus and Sophocles",
                author: "Sophocles",
                subjects: "Greek drama (Tragedy) -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/7073/pg7073.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/7073.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Speeches against Catilina",
                author: "Cicero, Marcus Tullius",
                subjects: "Catiline, approximately 108 B.C.-62 B.C., Latin language -- Readers, Rome -- History -- Conspiracy of Catiline, 65-62 B.C., Speeches, addresses, etc., Latin",
                image: "https://www.gutenberg.org/cache/epub/39355/pg39355.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/39355/39355-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Statesman",
                author: "Plato",
                subjects: "Classical literature, Political science -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1738/pg1738.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1738/1738-h/1738-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Stories from Thucydides",
                author: "Thucydides",
                subjects: "Greece -- History -- Peloponnesian War, 431-404 B.C. -- Fiction",
                image: "https://www.gutenberg.org/cache/epub/9074/pg9074.cover.small.jpg",
                text: "https://www.gutenberg.org/files/9074/9074-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Stories from the Odyssey",
                author: "Homer",
                subjects: "Epic poetry, Greek -- Adaptations, Odysseus, King of Ithaca (Mythological character) -- Fiction, Tales -- Greece",
                image: "https://www.gutenberg.org/cache/epub/13725/pg13725.cover.small.jpg",
                text: "https://www.gutenberg.org/files/13725/13725-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Symposium",
                author: "Plato",
                subjects: "Classical literature, Love -- Early works to 1800, Philosophy, Ancient, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1600/pg1600.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1600/1600-h/1600-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Academic Questions, Treatise De Finibus, and Tusculan Disputations, of M.T. Cicero, With a Sketch of the Greek Philosophers Mentioned by Cicero",
                author: "Cicero, Marcus Tullius",
                subjects: "Ethics -- Early works to 1800, Happiness -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/29247/pg29247.cover.small.jpg",
                text: "https://www.gutenberg.org/files/29247/29247-h/29247-h.html",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Acharnians",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Athens (Greece) -- Drama, Comedies, Greek drama (Comedy) -- Translations into English, Peace treaties -- Drama",
                image: "https://www.gutenberg.org/cache/epub/3012/pg3012.cover.small.jpg",
                text: "https://www.gutenberg.org/files/3012/3012-h/3012-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Adventures of Ulysses the Wanderer",
                author: "Homer",
                subjects: "Homer. Odyssey -- Adaptations, Mythology, Greek, Odysseus, King of Ithaca (Mythological character)",
                image: "https://www.gutenberg.org/cache/epub/41935/pg41935.cover.small.jpg",
                text: "https://www.gutenberg.org/files/41935/41935-h/41935-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Aeneid",
                author: "Virgil",
                subjects: "Aeneas (Legendary character) -- Poetry, Epic poetry, Latin -- Translations into English, Legends -- Rome -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/228/pg228.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/228/228-h/228-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Aeneid of Virgil",
                author: "Virgil",
                subjects: "Aeneas (Legendary character) -- Poetry, Epic poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/22456/pg22456.cover.small.jpg",
                text: "https://www.gutenberg.org/files/22456/22456-h/22456-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Agamemnon of Aeschylus: Translated into English Rhyming Verse with Explanatory Notes",
                author: "Aeschylus",
                subjects: "Agamemnon, King of Mycenae (Mythological character) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/14417/pg14417.cover.small.jpg",
                text: "https://www.gutenberg.org/files/14417/14417-h/14417-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Analects of Confucius (from the Chinese Classics)",
                author: "Confucius",
                subjects: "Ethics -- China, Philosophy, Chinese",
                image: "https://www.gutenberg.org/cache/epub/3330/pg3330.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/3330.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Apology",
                author: "Xenophon",
                subjects: "Classical literature, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1171/pg1171.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1171/1171-h/1171-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Art of Poetry: an Epistle to the Pisos: Q. Horatii Flacci Epistola Ad Pisones, De Arte Poetica.",
                author: "Horace",
                subjects: "Aesthetics -- Early works to 1800, Criticism -- Early works to 1800, Didactic poetry, Latin -- Translations into English, Epistolary poetry, Latin -- Translations into English, Poetics -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/9175/pg9175.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/9175.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Athenian Constitution",
                author: "Aristotle",
                subjects: "Athens (Greece) -- Politics and government -- Early works to 1800, Classical literature, Constitutional history -- Greece -- Athens -- To 146 B.C.",
                image: "https://www.gutenberg.org/cache/epub/26095/pg26095.cover.small.jpg",
                text: "https://www.gutenberg.org/files/26095/26095-h/26095-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Bacchae of Euripides",
                author: "Euripides",
                subjects: "Bacchantes -- Drama, Dionysus (Greek deity) -- Drama, Pentheus, King of Thebes (Mythological character) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/35173/pg35173.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/35173/35173-h/35173-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Birds",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Athens (Greece) -- Social life and customs -- Drama, Birds -- Drama, Comedies, Gods, Greek -- Drama, Greek drama (Comedy) -- Translations into English, Imaginary societies -- Drama",
                image: "https://www.gutenberg.org/cache/epub/3013/pg3013.cover.small.jpg",
                text: "https://www.gutenberg.org/files/3013/3013-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Book of War: The Military Classic of the Far East: The Articles of Suntzu; The Sayings of Wutzu",
                author: "Sunzi, active 6th century B.C.",
                subjects: "Military art and science -- Early works to 1800, Strategy -- Early works to 1800, War -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/44024/pg44024.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/44024/44024-h/44024-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Boys' and Girls' Herodotus: Being Parts of the History of Herodotus, Edited for Boys and Girls",
                author: "Herodotus",
                subjects: "Greece -- History -- Persian Wars, 500-449 B.C. -- Juvenile literature, Greece -- History -- To 146 B.C. -- Juvenile literature, History, Ancient -- Juvenile literature",
                image: "https://www.gutenberg.org/cache/epub/55758/pg55758.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/55758/55758-h/55758-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Bucolics and Eclogues",
                author: "Virgil",
                subjects: "Country life -- Rome -- Poetry, Pastoral poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/230/pg230.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/230/230-h/230-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Captivi and the Mostellaria",
                author: "Plautus, Titus Maccius",
                subjects: "Latin drama (Comedy), Plautus, Titus Maccius -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/7282/pg7282.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/7282/7282-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Carmina of Caius Valerius Catullus",
                author: "Catullus, Gaius Valerius",
                subjects: "Catullus, Gaius Valerius -- Translations into English, Elegiac poetry, Latin -- Translations into English, Epigrams, Latin -- Translations into English, Love poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/20732/pg20732.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/20732/20732-h/20732-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Categories",
                author: "Aristotle",
                subjects: "Categories (Philosophy), Logic -- Early works to 1800, Philosophy, Ancient",
                image: "https://www.gutenberg.org/cache/epub/2412/pg2412.cover.small.jpg",
                text: "https://www.gutenberg.org/files/2412/2412-h/2412-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Cavalry General",
                author: "Xenophon",
                subjects: "Cavalry -- Greece -- History, Classical literature, Military art and science -- Greece -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1172/pg1172.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1172/1172-h/1172-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Characters of Theophrastus: A Translation, with Introduction",
                author: "Theophrastus",
                subjects: "Character sketches -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/58242/pg58242.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/58242/58242-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Clouds",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Classical literature, Comedies, Greek drama (Comedy) -- Translations into English, Rhetoric -- Study and teaching -- Drama",
                image: "https://www.gutenberg.org/cache/epub/2562/pg2562.cover.small.jpg",
                text: "https://www.gutenberg.org/files/2562/2562-h/2562-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Economist",
                author: "Xenophon",
                subjects: "Administration of estates -- Greece -- Early works to 1800, Classical literature, Dialogues, Greek -- Translations into English, Greece -- Economic conditions -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1173/pg1173.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1173/1173-h/1173-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Electra of Euripides: Translated into English rhyming verse",
                author: "Euripides",
                subjects: "Electra (Greek mythological figure) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/14322/pg14322.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/14322.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Elegies of Tibullus: Being the Consolations of a Roman Lover Done in English Verse",
                author: "Tibullus",
                subjects: "Elegiac poetry, Latin -- Translations into English, Tibullus -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/9610/pg9610.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/9610/9610-h/9610-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Eleven Comedies, Volume 1",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Athens (Greece) -- Drama, Comedies, Greek drama (Comedy) -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/8688/pg8688.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/8688.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Eleven Comedies, Volume 2",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Athens (Greece) -- Drama, Comedies, Greek drama (Comedy) -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/8689/pg8689.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/8689.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Ethics of Aristotle",
                author: "Aristotle",
                subjects: "Ethics",
                image: "https://www.gutenberg.org/cache/epub/8438/pg8438.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/8438/8438-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Extant Odes of Pindar: Translated with Introduction and Short Notes by Ernest Myers",
                author: "Pindar",
                subjects: "Athletics -- Greece -- Poetry, Games -- Greece -- Poetry, Laudatory poetry, Greek -- Translations into English, Mythology, Greek -- Poetry, Olympic games (Ancient) -- Poetry, Pindar -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/10717/pg10717.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/10717.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The First Four Books of Xenophon's Anabasis",
                author: "Xenophon",
                subjects: "Cyrus, the Younger, approximately 423 B.C.-401 B.C., Iran -- History -- To 640",
                image: "https://www.gutenberg.org/cache/epub/22003/pg22003.cover.small.jpg",
                text: "https://www.gutenberg.org/files/22003/22003-h/22003-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Fourth Book of Virgil's Aeneid and the Ninth Book of Voltaire's Henriad",
                author: "Virgil",
                subjects: "Virgil. Aeneis, Voltaire, 1694-1778. Henriade",
                image: "https://www.gutenberg.org/cache/epub/20144/pg20144.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/20144/20144-h/20144-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Frogs",
                author: "Aristophanes",
                subjects: "Aristophanes -- Translations into English, Comedies, Dionysus (Greek deity) -- Drama, Dramatists -- Drama, Greek drama (Comedy) -- Translations into English, Playwriting -- Drama, Voyages to the otherworld -- Drama",
                image: "https://www.gutenberg.org/cache/epub/7998/pg7998.cover.small.jpg",
                text: "https://www.gutenberg.org/files/7998/7998-h/7998-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Georgics",
                author: "Virgil",
                subjects: "Agriculture -- Poetry, Didactic poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/232/pg232.cover.small.jpg",
                text: "https://www.gutenberg.org/files/232/232-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The History of Herodotus — Volume 1",
                author: "Herodotus",
                subjects: "Greece -- History -- To 146 B.C., History, Ancient",
                image: "https://www.gutenberg.org/cache/epub/2707/pg2707.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/2707/2707-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The History of Herodotus — Volume 2",
                author: "Herodotus",
                subjects: "Greece -- History -- To 146 B.C., History, Ancient",
                image: "https://www.gutenberg.org/cache/epub/2456/pg2456.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/2456/2456-h/2456-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The History of the Peloponnesian War",
                author: "Thucydides",
                subjects: "Greece -- History -- Peloponnesian War, 431-404 B.C.",
                image: "https://www.gutenberg.org/cache/epub/7142/pg7142.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/7142/7142-h/7142-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The House of Atreus; Being the Agamemnon, the Libation bearers, and the Furies",
                author: "Aeschylus",
                subjects: "Agamemnon, King of Mycenae (Mythological character) -- Drama, Orestes, King of Argos (Mythological character) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/8604/pg8604.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/8604/8604-h/8604-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iliad",
                author: "Homer",
                subjects: "Achilles (Mythological character) -- Poetry, Classical literature, Epic poetry, Greek -- Translations into English, Trojan War -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/6130/pg6130.cover.small.jpg",
                text: "https://www.gutenberg.org/files/6130/6130-h/6130-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iliad",
                author: "Homer",
                subjects: "Achilles (Mythological character) -- Poetry, Classical literature, Epic poetry, Greek -- Translations into English, Trojan War -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/6150/pg6150.cover.small.jpg",
                text: "https://www.gutenberg.org/files/6150/6150-h/6150-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iliad for Boys and Girls",
                author: "Homer",
                subjects: "Achilles (Mythological character) -- Juvenile literature, Trojan War -- Juvenile literature",
                image: "undefined",
                text: "http://www.gutenberg.org/files/21584/21584-index.html",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iliad of Homer (1873)",
                author: "Homer",
                subjects: "Achilles (Mythological character), Epic poetry, Greek -- Translations into English, Trojan War",
                image: "https://www.gutenberg.org/cache/epub/22382/pg22382.cover.small.jpg",
                text: "https://www.gutenberg.org/files/22382/22382-h/22382-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iliad of Homer: Translated into English Blank Verse by William Cowper",
                author: "Homer",
                subjects: "Achilles (Mythological character) -- Poetry, Epic poetry, Greek -- Translations into English, Trojan War -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/16452/pg16452.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/16452/16452-h/16452-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iliads of Homer: Translated according to the Greek",
                author: "Homer",
                subjects: "Achilles (Mythological character) -- Poetry, Epic poetry, Greek -- Translations into English, Trojan War -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/51355/pg51355.cover.small.jpg",
                text: "https://www.gutenberg.org/files/51355/51355-h/51355-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Iphigenia in Tauris of Euripides",
                author: "Euripides",
                subjects: "Iphigenia (Mythological character) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/5063/pg5063.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/5063.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Letters of Cicero, Volume 1: The Whole Extant Correspodence in Chronological Order",
                author: "Cicero, Marcus Tullius",
                subjects: "Authors, Latin -- Correspondence, Cicero, Marcus Tullius -- Correspondence, Statesmen -- Rome -- Correspondence",
                image: "https://www.gutenberg.org/cache/epub/21200/pg21200.cover.small.jpg",
                text: "https://www.gutenberg.org/files/21200/21200-h/21200-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Lyrical Dramas of Aeschylus Translated into English Verse",
                author: "Aeschylus",
                subjects: "Aeschylus -- Translations into English, Mythology, Greek -- Drama",
                image: "https://www.gutenberg.org/cache/epub/59225/pg59225.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/59225/59225-h/59225-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Memorabilia",
                author: "Xenophon",
                subjects: "Classical literature, Philosophers, Ancient -- Biography -- Early works to 1800, Socrates -- Trials, litigation, etc. -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1177/pg1177.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1177/1177-h/1177-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Memorable Thoughts of Socrates",
                author: "Xenophon",
                subjects: "Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/17490/pg17490.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/17490/17490-h/17490-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Odes and Carmen Saeculare of Horace",
                author: "Horace",
                subjects: "Horace -- Translations into English, Laudatory poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/5432/pg5432.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/5432.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Odyssey",
                author: "Homer",
                subjects: "Epic poetry, Greek -- Translations into English, Homer -- Translations into English, Odysseus, King of Ithaca (Mythological character) -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/3160/pg3160.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/3160/3160-h/3160-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Odyssey of Homer",
                author: "Homer",
                subjects: "Epic poetry, Greek -- Translations into English, Homer -- Translations into English, Odysseus, King of Ithaca (Mythological character)",
                image: "https://www.gutenberg.org/cache/epub/1728/pg1728.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1728/1728-h/1728-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Odyssey: Rendered into English prose for the use of those who cannot read the original",
                author: "Homer",
                subjects: "Epic poetry, Greek -- Translations into English, Homer -- Translations into English, Odysseus, King of Ithaca (Mythological character)",
                image: "https://www.gutenberg.org/cache/epub/1727/pg1727.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1727/1727-h/1727-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Odysseys of Homer, together with the shorter poems",
                author: "Homer",
                subjects: "Epic poetry, Greek -- Translations into English, Odysseus, King of Ithaca (Mythological character) -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/48895/pg48895.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/48895/48895-h/48895-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Olynthiacs and the Phillippics of Demosthenes: Literally translated with notes",
                author: "Demosthenes",
                subjects: "Athens (Greece) -- Politics and government -- Early works to 1800, Demosthenes -- Translations into English, Speeches, addresses, etc., Greek -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/6878/pg6878.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/6878.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Orations of Lysias",
                author: "Lysias",
                subjects: "Speeches, addresses, etc., Greek -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/6969/pg6969.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/6969.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Orations of Marcus Tullius Cicero, Volume 4",
                author: "Cicero, Marcus Tullius",
                subjects: "Speeches, addresses, etc., Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/11080/pg11080.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/11080.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Poems and Fragments of Catullus: Translated in the Metres of the Original",
                author: "Catullus, Gaius Valerius",
                subjects: "Catullus, Gaius Valerius -- Translations into English, Epigrams, Latin -- Translations into English, Love poetry, Latin -- Translations into English, Rome -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/18867/pg18867.cover.small.jpg",
                text: "https://www.gutenberg.org/files/18867/18867-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Poetics of Aristotle",
                author: "Aristotle",
                subjects: "Aesthetics -- Early works to 1800, Poetry -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1974/pg1974.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1974/1974-h/1974-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Polity of the Athenians and the Lacedaemonians",
                author: "Xenophon",
                subjects: "Classical literature, Greece -- Politics and government -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1178/pg1178.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1178/1178-h/1178-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Project Gutenberg Works of Plato: An Index",
                author: "Plato",
                subjects: "Indexes",
                image: "https://www.gutenberg.org/cache/epub/29441/pg29441.cover.small.jpg",
                text: "https://www.gutenberg.org/files/29441/29441-h/29441-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Project Gutenberg Works of Xenophon: An Index",
                author: "Xenophon",
                subjects: "Indexes",
                image: "https://www.gutenberg.org/cache/epub/29459/pg29459.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/29459/29459-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Public Orations of Demosthenes, volume 1",
                author: "Demosthenes",
                subjects: "Athens (Greece) -- Politics and government -- Early works to 1800, Demosthenes -- Translations into English, Speeches, addresses, etc., Greek -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/9060/pg9060.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/9060.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Public Orations of Demosthenes, volume 2",
                author: "Demosthenes",
                subjects: "Athens (Greece) -- Politics and government -- Early works to 1800, Demosthenes -- Translations into English, Speeches, addresses, etc., Greek -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/9061/pg9061.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/9061.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Republic",
                author: "Plato",
                subjects: "Classical literature, Justice -- Early works to 1800, Political science -- Early works to 1800, Utopias -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1497/pg1497.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1497/1497-h/1497-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Republic of Plato",
                author: "Plato",
                subjects: "Justice -- Early works to 1800, Political science -- Early works to 1800, Utopias -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/55201/pg55201.cover.small.jpg",
                text: "https://www.gutenberg.org/files/55201/55201-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Rhesus of Euripides",
                author: "Euripides",
                subjects: "Rhesus (Legendary character) -- Drama",
                image: "https://www.gutenberg.org/cache/epub/35170/pg35170.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/35170/35170-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Satires, Epistles, and Art of Poetry of Horace",
                author: "Horace",
                subjects: "Epistolary poetry, Latin -- Translations into English, Horace -- Translations into English, Rome -- Poetry, Verse satire, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/5419/pg5419.cover.medium.jpg",
                text: "https://www.gutenberg.org/ebooks/5419.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Sayings of Confucius",
                author: "Confucius",
                subjects: "Confucianism, Philosophy, Chinese",
                image: "https://www.gutenberg.org/cache/epub/24055/pg24055.cover.small.jpg",
                text: "https://www.gutenberg.org/files/24055/24055-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Sayings of Confucius: A New Translation of the Greater Part of the Confucian Analects",
                author: "Confucius",
                subjects: "Ethics -- China, Philosophy, Chinese",
                image: "https://www.gutenberg.org/cache/epub/46389/pg46389.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/46389/46389-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Seven Plays in English Verse",
                author: "Sophocles",
                subjects: "Mythology, Greek -- Drama, Sophocles -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/14484/pg14484.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/14484/14484-h/14484-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Sportsman: On Hunting, a Sportsman's Manual, Commonly Called Cynegeticus",
                author: "Xenophon",
                subjects: "Classical literature, Sportsmanship -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1180/pg1180.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1180/1180-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Story of Troy",
                author: "Homer",
                subjects: "Achilles (Mythological character) -- Juvenile literature, Epic poetry, Greek -- Adaptations, Readers, Trojan War -- Juvenile literature",
                image: "https://www.gutenberg.org/cache/epub/16990/pg16990.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/16990/16990-h/16990-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Story of the Odyssey",
                author: "Homer",
                subjects: "Odysseus, King of Ithaca (Mythological character) -- Juvenile literature",
                image: "https://www.gutenberg.org/cache/epub/6370/pg6370.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/6370.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Symposium",
                author: "Xenophon",
                subjects: "Classical literature, Philosophy, Ancient, Socrates, 470 BC-399 BC",
                image: "https://www.gutenberg.org/cache/epub/1181/pg1181.cover.small.jpg",
                text: "https://www.gutenberg.org/files/1181/1181-h/1181-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Tragedies of Euripides, Volume I.",
                author: "Euripides",
                subjects: "Euripides -- Translations into English, Mythology, Greek -- Drama",
                image: "https://www.gutenberg.org/cache/epub/15081/pg15081.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/15081/15081-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Trojan Women of Euripides",
                author: "Euripides",
                subjects: "Andromache (Legendary character) -- Drama, Cassandra (Legendary character) -- Drama, Hecuba, Queen of Troy -- Drama, Helen, of Troy, Queen of Sparta -- Drama, Trojan War -- Drama",
                image: "https://www.gutenberg.org/cache/epub/35171/pg35171.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/35171/35171-h/35171-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Trojan women of Euripides",
                author: "Euripides",
                subjects: "Andromache (Legendary character) -- Drama, Cassandra (Legendary character) -- Drama, Hecuba, Queen of Troy -- Drama, Helen, of Troy, Queen of Sparta -- Drama, Trojan War -- Drama",
                image: "https://www.gutenberg.org/cache/epub/10096/pg10096.cover.small.jpg",
                text: "https://www.gutenberg.org/ebooks/10096.html.images",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Wisdom of Confucius: with Critical and Biographical Sketches",
                author: "Confucius",
                subjects: "Ethics -- China, Philosophy, Chinese",
                image: "https://www.gutenberg.org/cache/epub/33815/pg33815.cover.small.jpg",
                text: "https://www.gutenberg.org/files/33815/33815-h/33815-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Works of Horace",
                author: "Horace",
                subjects: "Horace -- Translations into English, Latin poetry -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/14020/pg14020.cover.small.jpg",
                text: "https://www.gutenberg.org/files/14020/14020-h/14020-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The republic of Cicero: Translated from the Latin; and Accompanied With a Critical and Historical Introduction.",
                author: "Cicero, Marcus Tullius",
                subjects: "Political science -- Early works to 1800, State, The -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/54161/pg54161.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/54161/54161-h/54161-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Æneid of Virgil Translated Into Scottish Verse. Volumes 1 & 2",
                author: "Virgil",
                subjects: "Aeneas (Legendary character) -- Poetry, Epic poetry, Latin -- Translations into Scots, Legends -- Rome -- Poetry",
                image: "https://www.gutenberg.org/cache/epub/49884/pg49884.cover.small.jpg",
                text: "https://www.gutenberg.org/files/49884/49884-h/49884-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Æneid of Virgil, Translated into English Verse",
                author: "Virgil",
                subjects: "Aeneas (Legendary character) -- Poetry, Epic poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/18466/pg18466.cover.small.jpg",
                text: "https://www.gutenberg.org/files/18466/18466-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Æneids of Virgil, Done into English Verse",
                author: "Virgil",
                subjects: "Aeneas (Legendary character) -- Poetry, Epic poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/29358/pg29358.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/29358/29358-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Theaetetus",
                author: "Plato",
                subjects: "Classical literature, Knowledge, Theory of -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1726/pg1726.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1726/1726-h/1726-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Theocritus, Bion and Moschus, Rendered into English Prose",
                author: "Theocritus",
                subjects: "Greek poetry -- Translations into English, Pastoral poetry, Greek -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/4775/pg4775.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/4775/4775-h.zip",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Theocritus, translated into English Verse",
                author: "Theocritus",
                subjects: "Alexandria (Egypt) -- Poetry, City and town life -- Poetry, Country life -- Poetry, Mediterranean Region -- Poetry, Pastoral poetry, Greek -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/11533/pg11533.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/11533/11533-h/11533-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Timaeus",
                author: "Plato",
                subjects: "Classical literature, Cosmology -- Early works to 1800",
                image: "https://www.gutenberg.org/cache/epub/1572/pg1572.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/1572/1572-h/1572-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "To Lesbia",
                author: "Catullus, Gaius Valerius",
                subjects: "Love poetry",
                image: "undefined",
                text: "http://www.gutenberg.org/files/23720/23720-index.html",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Translations from Lucretius",
                author: "Lucretius Carus, Titus",
                subjects: "Didactic poetry, Latin -- Translations into English",
                image: "https://www.gutenberg.org/cache/epub/64024/pg64024.cover.small.jpg",
                text: "https://www.gutenberg.org/files/64024/64024-h/64024-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Treatises on Friendship and Old Age",
                author: "Cicero, Marcus Tullius",
                subjects: "Friendship, Old age",
                image: "https://www.gutenberg.org/cache/epub/2808/pg2808.cover.small.jpg",
                text: "https://www.gutenberg.org/files/2808/2808-h/2808-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Two Dramatizations from Vergil: I. Dido—the Phœnecian Queen; II. The Fall of Troy",
                author: "Virgil",
                subjects: "Dido (Legendary character) -- Drama, Epic poetry, Latin -- Adaptations, Trojan War -- Drama, Virgil -- Adaptations",
                image: "https://www.gutenberg.org/cache/epub/54717/pg54717.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/54717/54717-h/54717-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Ulysses of Ithaca",
                author: "Homer",
                subjects: "Odysseus, King of Ithaca (Mythological character) -- Juvenile literature",
                image: "https://www.gutenberg.org/cache/epub/59750/pg59750.cover.small.jpg",
                text: "https://www.gutenberg.org/files/59750/59750-h/59750-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Æschylos Tragedies and Fragments",
                author: "Aeschylus",
                subjects: "Aeschylus -- Translations into English, Mythology, Greek -- Drama",
                image: "https://www.gutenberg.org/cache/epub/53174/pg53174.cover.medium.jpg",
                text: "https://www.gutenberg.org/files/53174/53174-h/53174-h.htm",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Athanasias",
                author: "Plato",
                subjects: "Classical literature, Justice",
                image: "https://dreamy-wing-c56915.netlify.app/books.jpg",
                text: "https://dreamy-wing-c56915.netlify.app/athanasias.html",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Hemocrates",
                author: "Plato",
                subjects: "Classical literature, Justice",
                image: "https://dreamy-wing-c56915.netlify.app/books.jpg",
                text: "https://dreamy-wing-c56915.netlify.app/hemocrates.html",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The History of the Peloponnesian War, Part II",
                author: "Thucydides",
                subjects: "Classical literature, Justice",
                image: "https://dreamy-wing-c56915.netlify.app/books.jpg",
                text: "https://dreamy-wing-c56915.netlify.app/peloponnesian.html",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    }
}