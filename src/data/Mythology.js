// source: https://megamitensei.fandom.com/
const myths = [
  {
    name: 'Abaddon',
    history: 'The Hebrew term "Abaddon", and its Greek equivalent "Apollyon" appear in the Bible as both a place of destruction and an archangel of the abyss. In the Hebrew Bible, abaddon is used with reference to a bottomless pit, often appearing alongside the place שְׁאוֹל, meaning the realm of the dead.',
    origins: ['Abrahamic'],
  },
  {
    name: 'Agathion',
    history: 'An Agathion is a familiar spirit which appears in the shape of a human or an animal, or even within a talisman, bottle or magic ring. It is strongest at midday.',
    origins: ['British'],
  },
  {
    name: 'Alice',
    history: `Alice is said to be based on Lewis Carroll's (Reverend Charles Lutwidge Dodgson's) character from his famous story Alice in Wonderland, part of Through the Looking Glass. The character Alice herself is said to be taken from Alice Pleasance Liddell, a little girl who was close to Carroll. The Shin Megami Tensei Alice shares many physical similarities with the character, most notably the blue dress and the blonde hair.

    However, some say that she is also based on a myth of an Aryan girl who died at a young age. When Alice died and became a spirit, she gained extreme magical power that drove her insane. Alice was used to scare Scandinavian children into behaving, or else Alice would visit them at night and kill them so that she may become "friends" with them. Due to the overwhelming support of both theories, it is easy to assume both are valid and that she is a hybrid of both figures. That both are valid seems to be the case though, since the Strange Journey compendium hints at both.
    
    `,
    origins: ['British', 'Scandinavian', 'Modern Fiction'],
  },
  {
    name: 'Alilat',
    history: `Al-Lat, also known as Allat, Alilat and Allatu, was one of three main idols alongside al-'Uzza and al-Manat worshipped by the people of Mecca before the message of Islam was spread by the prophet Muhammad. Its origins are traced from the traditions of Sumerian civilization brought to pre-Islamic Arabia by merchants and nomads who idolized stones in their daily life.

    In one instance, it is regarded as a goddess, and had a son Dusura, who was idolized by the people of Petra in ancient Jordan. Alilat is associated with the morning star, which is also associated with Venus.`,
    origins: ['Arabian'],
  },
  {
    name: 'Ame-no-Uzume',
    history: `Ame no Uzume is the goddess of dawn and revelry in the Shinto religion of Japan. She famously relates to the tale of the missing sun deity, Amaterasu.

    Amaterasu's brother, the storm god Susano-o, had vandalized her sacred buildings and brutally killed one of her maidens because she refused to trust him. In turn, Amaterasu became terrified of his wrath and retreated into a cave. The world, without the illumination of the sun, became dark and the gods could not lure Amaterasu out of her hiding place.
    
    The clever Uzume overturned a tub near the cave entrance and began a dance on it, tearing off her clothing in front of the other deities. They considered this so comical that they laughed heartily at the sight.
    
    Amaterasu heard them, and peered out to see what all the fuss was about. When she opened the cave, she saw her glorious reflection in a mirror which Uzume had placed on a tree, and slowly emerged from her hiding spot.
    
    At that moment, the god Ame-no-Tajikarawo dashed forth and closed the cave behind her, refusing to budge so that she could no longer retreat. Another god tied a magic rope across the entrance. The deities Ame-no-Koyane and Ame-no-Futodama then asked Amaterasu to rejoin the divine. She agreed, and light was restored to the earth.`,

    origins: ['Japanese'],
  },
  {
    name: 'Ananta',
    history: `Shesha, also known as Ananta, is the king of all nagas according to Hindu mythology and one of the primal beings of creation. He is sometimes called Ananta Shesha which means "Endless Shesha" as he is said to hold all the planets in the universe on his hoods. He is usually depicted as a massive coiled serpent with as many as five to one thousand heads, sometimes wearing an ornate crown on each head. The heads are not only venomous but spew fire as well. He was born from the mouth of the sleeping Balarama (sun god's brother) where he devoured all but Balarama's head.

    Shesha is used by Vishnu as a bed, and he is often found sleeping upon his back. Shesha will also constantly be found singing about the glories of Vishnu from all his many mouths.
    
    One story of Shesha tells of when he challenged the devas, claiming that only the great Hindu Triad could defeat him. Only the god of wind, Vayu, accepted his challenge. Shesha wrapped himself around a large mountain and told Vayu that he would be the winner should he destroy the mountain. Vayu created powerful storms, but Shesha simply enlarged himself and swallowed up the storms. Vayu, weakened from his attempts to defeat Shesha, was overpowered and swallowed by the serpent causing all living things to lose the ability to breathe. Luckily Vishnu told Shesha to release Vayu, Shesha obeyed, and in doing so the mountain he was wrapped around instantly crumbled.
    
    At the end of each Kalpa (time period allotted to the earth), the serpent destroys all creation.`,

    origins: ['Hindu'],
  },
  {
    name: 'Andras',
    history: 'According to the writings in The Lesser Key of Solomon, Andras is the sixty-third demonic spirit listed in the Ars Goetia. He is a Great Marquis of Hell with thirty legions of demons under his command. He is depicted as a humanoid with an angel\'s wings and an owl\'s head, riding a black wolf and holding a bright sword. Among the spirits of the Goetia, Andras is one of the most violent and dangerous to summon. The conjurer and any attendants he may have must stay within a magic circle at all times no matter how much Andras tempts them to leave it, or he will surely kill them. He is able to control a person\'s anger or inflict rage upon any person the conjurer desires and tempt people to kill their servants or masters. If so asked, Andras will gladly kill any person the conjurer desires, and in certain demonology it is suggested that Flauros is his servant.',
    origins: ['Ars Goetia'],
  },
  {
    name: 'Angel',
    history: `Angels are divine celestial beings that have been recorded in various religious lore, mainly Abrahamic, who faithfully serve God. The are said to be manifestations of God's will and to rule and protect creation from all beings that seek to destroy it. The generic angels depicted in paintings are almost always of this class being with wings, silk robes and halos.

    In the Quabbalah, they are said to inhabit the sephirah Malkuth and are led by the archangel Sandalphon. The word "angel" means "messenger" in Greek. Angels serve as a link between God and humankind. They are also sometimes referred to as "servants."`,

    origins: ['Abrahamic'],
  },
  {
    name: 'Anubis',
    history: `Anubis is widely known as the Egyptian deity of mummification. In this role, he oversees the mummification process of the dead, and is usually seen in hieroglyphic tomb-carvings as overseeing the burial ritual for the pharaohs and those of royal lineage; this is due to the priest involved wearing the masks of Anubis to symbolize him as the overseer of the ritual.

    His place in the Judgement Arcana comes from the ancient Egyptian belief that those passing into the afterlife were judged by him using a scale to see if the deceased's heart (lightened by good works or weighed down by sins) was as light as a feather. Should the heart be heavier than the feather, the heart would be eaten by Ammut, and the person undergoing judgement was not allowed to continue their voyage towards Osiris and immortality.
    `,
    origins: ['Egyptian'],
  },
  {
    name: 'Anzu',
    history: 'Anzu, mainly known as Zu, was a demonic tempest bird in Mesopotamian mythology, known for stealing the Tablet of Destinies from Enlil, the lord of the wind. These specific tablets gave the power to whomever possessed them to control the universe. The supreme god Anu promised sovereignty over the gods to whoever recovered the tablets from Anzu. Due to the surviving texts being in fragments, it\'s unclear to establish the outcome, but it seems that either the god Marduk or Ninurta, Enlil\'s son, recovered the Tablets.',
    origins: ['Mesopotamia'],
  },
  {
    name: 'Apsaras',
    history: 'Apsaras (Sanskrit: अप्सरा) also known as Vidhya Dhari, according to Hindu and Buddhist mythology, are spirits that appear in the form of young, beautiful women who have mastered the fine art of celestial dance. They are the wives of Indra\'s servants, Gandharvas, and are known to entertain the gods and fallen heroes, dancing in the divine palaces to music made by their husbands. They are frequently equated with the water-elemental nymphs and naiads of Ancient Greece, and depictions of them can be seen in Cambodian and Balinese culture.',
    origins: ['Hindu', 'Buddhist'],
  },
  {
    name: 'Ara Mitama',
    history: 'Ara Mitama represents aggression and forcefulness and is the source of valor, anger, passion and other heated emotions. It is said to be the more wild and untamed side of the dualistic nature of the spirit. It is usually considered opposite to Nigi Mitama.',
    origins: ['Japanese'],
  },
  {
    name: 'Arahabaki',
    history: 'Arahabaki is an ancient Japanese aboriginal god since the Kofun period. The Momunofu were his servants and before his religion was submerged by the Shinto pantheon, Arahabaki was worshipped in Japan\'s northeastern regions as a god of travelers. He was also worshipped by Nagasunehiko, an enemy of Emperor Jimmu, and so by the Emperor\'s orders Arahabaki became a symbol of treachery, rebellion and heresy and his worship was forbidden for a long period afterwards. However, this is only mentioned in the Tsugaru Soto-Sangunshi (which was said to have been compiled in the 1970s) which has been concluded to be a false document.',
    origins: ['Japanese'],
  },
  {
    name: 'Archangel',
    history: `In the nine orders of angels in Christian teachings, the archangels are among the eighth, making them second in the third hierarchy. Archangels are one of the few bodies of angels that contact those on the material plane directly and are the ministers and messengers between God and mankind. There is a dispute on whether famous archangels such as Michael and Gabriel are the same class as the "plain" archangels, who in the Kabbalah and in the Bible are called "Beni Elohim" (meaning "children of God"), or belong to a completely different order known as "Rav-Malakhim" or "Malakhim-Panav," who are the angels that stand before the lord himself.

    According to some texts, archangels are also the primary warrior race of angels and are known to be at constant war with the fallen angels. It is even suggested that Lucifer was an archangel before his fall from grace.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Ardha',
    history: 'The term "Ardhanarishvara" is a combination of three words- "ardha," "nari" and "ishvara," meaning respectively, "half," "woman" and "lord" or "god," that is, Ardhanarishvara is the Lord Who is Half Woman. The god is male on one side and female on the other, depicted with the male half bearing aspects of Shiva and the female half bearing aspects of Parvati. It is one of the most common forms of the divine in Indian art and the figure itself is likely older than the many stories and myths that have formed around it. In some texts, Ardhanarishvara is an androgynous incarnation of Shiva, in others it is the form of Shiva and Parvati, who loved each other so deeply that they joined as one being rather than stay apart.',
    origins: ['Hindu'],
  },
  {
    name: 'Arsene',
    history: 'Arsène Lupin is a fictional gentleman thief created by Maurice Leblanc. He was known for targeting criminals or those who were much worse than himself, making him an anti-hero of sorts within his own stories. He might have been partly inspired by the French anarchist Marius Jacob.',
    origins: ['Modern Fiction'],
  },
  {
    name: 'Asura-Ou',
    history: `Asuras are entities that take on varying roles in the Asian religions.

    In the old Vedic religion, they were simply gods of moral/social phenomenon who regularly competed with the Devas, who were gods of natural phenomenon.
    
    In Hinduism, they are fanatical, demon-like entities associated with carnal and materialistic pleasures, and often thirsted for violence, opposed to the more peace-inclined Devas. There are many kings and rulers of the Asura, but one major Asura Lord is based on Virocana, also known as Maha Vairocana or Dainichi Nyorai, the king of the asuras who, alongside Indra, searched for the secret of enlightenment.
    
    In Buddhism, they are the lowest rank of deities and are jealous gods addicted to various malign passions, while said to be one of the four unhappy births, being representative of a human being incapable of peace and always angered with the world, while also seeking strife and violence. In Japanese Buddhism, they are demigods, or semi-blessed beings. Powerful protectors of Buddhism, yet fierce and quarrelsome, they are partly good and partly evil, like humans. Their realm is believed to be a world of strife said to be located on the ocean floor. Some say Ashura was an Indian royal who converted to Buddhism. In other traditions, Ashura was a sun goddess who was feared for bringing droughts. The leaders of the Asuras were called Asurinda or Asurendra ("Asura Lord"). The principal leaders are Vemacritin (also called Vepacitti), Rahu (also called Veroca, Verocana, or Virocana) and Paharada. The appearance of the Megami Tensei series' Asura is most likely based on the Japanese Buddhist depiction of the Asuras.
    
    However, in Zoroastrianism, Asura is known as Ahura, and are depicted as the forces of good, led by Ahura Mazda. In fact, the Indo-Iranians, the term asura (or in this case ahura) originally referred to divine beings on par with the gods. After the Aryans went their separate ways from the Iranians, the asuras came to be seen as rival gods, eventually even demonic. The struggle between the devas and the asuras possibly reflects the conflict between the tribes who worshiped a pantheon led by the god Indra and the tribes who worshiped the gods called the asuras.`,
    origins: ['Hindu', 'Buddhist', 'Zoroastrian', 'Vedic'],
  },
  {
    name: 'Atavaka',
    history: 'Atavaka ("lord of the forest" in Sanskrit), or Daigensui Myo-O (大元帥明王) in Japanese, used to be a child-eating demon until he received Buddha\'s enlightenment. He then became one of the Yaksha Kings and vassal to Bishamonten, as well as the protector god of the southwest.',
    origins: ['Buddhist'],
  },
  {
    name: 'Atropos',
    history: `Atropos is the eldest of the three Moirae Sisters, and was known as "the Inflexible One". She is the one who cuts the thread of fate, signifying the end of one's life. They controlled the destiny of every living mortal and it was thought that even Zeus was subject to their will, unable to change it; in a few myths, however, Zeus was named "Moiragetes", i.e. controller of the Fates.

    In mythology, it is said that she appears with her sisters within three days of a baby's birth to decide its fate. Her Roman equivalent was Morta. According to Hesiod's Theogony, she and her sisters (Lachesis and Clotho) are the daughters of Nyx and Erebus. In other accounts, they are said to be the daughters of Zeus and Themis as well as several other beings such as Chaos and Ananke.
    
    Atropos , along with her sisters and Hermes, was given credit for creating the alphabet for their people, forced the goddess Aphrodite into making love with other beings, weakened the monster Typhon with poison fruit, persuaded Zeus to kill Asclepius with lightning, and even aided the gods in their war with the Giants by killing Agrius and Thoas with bronze clubs. Even though Atropos and her sisters were worshiped as goddesses, their representation of fate is more central to their role in mythology.
    
    She is the most known sister, due to her job. Atropos was the smallest in stature, but the oldest and some believe, more powerful and cruel. Once those ends are cut by her razor sharp scissors, it is impossible to tie them back together. With this, she is also treated as a goddess of death.`,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Attis',
    history: `Attis originated in the kingdom of Phrygia and eventually became a part of Greek lore. Attis was conceived when his mother Nana ate a fruit from a tree that grew on the site where Agdistis, Cybele's son from Zeus, had its male sexual organs castrated and buried.

    Attis grew up to be a handsome man who attracted Cybele's attention, but when he ran away rejecting her love, Cybele chased after him. Attis arrived at the site of a pine tree, castrated himself and died. The pine tree protected his spirit, while Zeus and Cybele worked to keep his body from rotting. In celebration of his rebirth, Attis' followers would do the same and castrate themselves.`,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Baal',
    history: `Baal is a Semitic title that means Master or Lord. While it can actually refer to a large number of different deities, Baal in this case refers to Hadad, the Canaan god of rain, fertility, agriculture and thunder who is also one of the King of the Gods in the Canaanite pantheon. He was worshipped in many ancient Middle Eastern communities. As Hadad he was represented as a bearded deity, often holding a club and thunderbolt and wearing a horned headdress. The bull was the symbolic animal of Hadad, as of the Hittite deity Teshub, who was identical with him.

    The name Baal, or Ba'al, is used as a substitute in some texts and in common modern usage. This is probably derived from the fact that, in ancient Canaan, only priests were allowed to utter the divine name, in much the same way as in Judaism where only priests were allowed to utter the name of God, so common people simply referred to him as Baal.
    
    The word ba'al was also used in the Hebrew Bible to refer to any number of local spirit deities worshiped as cult images, and in this context they were each regarded as false gods. Because of this, several demons were derived from Baal, including Bael and Beelzebub.`,
    origins: ['Canaanite', 'Semitic', 'Abrahamic', 'Mesopotamian'],
  },
  {
    name: 'Baphomet',
    history: `Baphomet is a King of Demons, known as the "Sabbatic Goat." He is identified with Satanachia, a senior demon general described in the Grand Grimoire. His name is believed to be a corruption of Muhammad, the founder of Islam. He is usually depicted with the head of a goat, with a pentagram carved between his horns, and the body of a human woman or hermaphrodite. He has the power to control all human women, and is said to give witches their power, thus, famously known as a demon worshipped by witches.

    The Knights Templar, heroes of the Crusades, were accused of worshipping Baphomet by a church Inquisition and branded as heretics. To keep them silent, the head of the Templars and another senior leader were sentenced to be burned alive. However, it was later revealed that this was orchestrated by King Philip IV of France, who coveted the Templars' wealth.`,
    origins: ['European'],
  },
  {
    name: 'Barong',
    history: 'The struggle between the forces of good and evil is represented in tales from the Indonesian island of Bali. Barong represents the forces of good; it is the protector of mankind, using its charms and magic to defend villagers against the deathly black magic of the witch Rangda. He is a guardian spirit that is most commonly seen in the form of a lion, although each region within Bali has its own version of Barong, the others being a dragon, boar or a tiger. Barong is animated by the brother spirit Banas Pati Rajah to do battle with Rangda in order to restore the balance between good and evil. However, after Rangda is killed, she is eventually resurrected, and Barong must do battle once again. This eternal battle is depicted in rituals seen in Bali, and in recent times have become an attraction for tourists.',
    origins: ['Balinese'],
  },
  {
    name: 'Beelzebub',
    history: `The lord of the flies, Beelzebub was originally a Canaanite deity named Baal and was later explained to be one of the seven princes of Hell in Christian sources. He is also considered to be synonymous with Satan. In Judaism, he was a mockery of the religions surrounding them that worshipped Baal, and in Rabbinical texts the name Ba'al Zebub was a mockery of the religion of Baal. Some scholars believe the name Ba'al Zebub ("Lord of the Flies") was a way of referring to Baal as a pile of dung and his followers as flies, as well as a pun on Ba'al Zebul ("Lord of the High Place").

    In Catholic demonology, he is sometimes considered to be one of the first three angels to fall from heaven, along with Lucifer and Leviathan. He is said to be one of the seven demon princes, and is often associated with pride, gluttony and the worship of false gods.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Belial',
    history: `Belial, also known as Berial, is the 68th spirit in the Ars Goetia and one of the four crowned princes of Hell ruling over the North.He is a mighty king and powerful king that was created next after Lucifer and is of his order. He appears in the form of a beautiful angel sitting in a chariot of fire and speaks with a comely voice.

    His office is to distribute preferments of senatorships and to cause favor of friends or foes. He bestows excellent familiars and governs 80 legions of spirits. Whoever summons him must have offerings of gifts or sacrifices or he will not give true answers to their demands, but even then with those, he will not spend more than one hour on the truth unless constrained by divine power or his seal, to be worn as a lamin by the person who summons him.
    
    The word means worthless in Hebrew, and later came to represent the personification of the devil. In the Old Testament of the bible the word tends to be used to describe a class of people, for instance the sons of Belial. In the Dead Sea Scrolls, the Angel of Light and the Angel of Darkness are mentioned. God is cited as the Angel of Light, and Belial the contrary. The demon was said to bring guilt and wickedness to man. The source also recounts a dream of Amram, the father of Moses, where Belial is described as the King of Evil or Prince of Darkness.`,
    origins: ['Abrahamic', 'Ars Goetia'],
  },
  {
    name: 'Belphegor',
    history: `Belphegor is a demon of Sloth, one of the 7 Deadly Sins. His name is a corruption of Baal-Peor, the name for the god of the Moabites. Belphegor gives people ideas for inventions that will make them rich and thus greedy and selfish. He was known as a phallic deity, associated with sex, orgies, and all forms of debauchery in general.

    As one of the fallen angels, Belphegor was originally a member of the order of Principalities, and after his fall he became a demonic counterpart to one of the ten Sephiroth that oversee the Tree of Life. Belphegor is a lieutenant from Hell, who had been dispatched to Earth on many missions by the Devil.
    
    Sometimes Belphegor is portrayed as a beautiful woman, but other times Belphegor is portrayed as a monstrous, horned male demon. Some claim that he must be worshiped on a toilet. According to De Plancy's Dictionnaire Infernal, he was Hell's ambassador to France. Consequently, his adversary is St Mary Magdalene, one of the patron saints of France.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Berith',
    history: `According to the writings in The Lesser Key of Solomon, Berith is the twenty-eighth demonic spirit listed in the Ars Goetia. He is a great duke of Hell with twenty-six legions of demons under his command. He is depicted as a knight or soldier wearing red armor and a golden crown; according to other grimoires, his skin is also red. He rides a gigantic red horse and burns those without manners.

    In order to speak with him, the conjurer must wear a silver ring and hold it before their face. He gives true answers to all things past, present and future as long as he is asked, but when not answering questions he is a liar. He can turn any metal into gold, give dignities and confirm them. As an angel, Berith was prince of the order of cherubim. As a demon, he serves as a master of ceremonies, duke and grand pontiff in Hell and notarizes pacts with the devil.
    
    Berith was important to some alchemists, who believed he had the power to transmute all base metals into gold. He was tricky to conjure, however, and had to be summoned with magic rings bearing his seal. He was known for making great promises, but also for being a great liar. In Michaelis' classification of demons, he tempts people with murder, contention, strife and blasphemy, and his adversary is St. Barnabas.
    
    Berith may be derived from Baal-Berith, a god worshiped in Canaan before he came to be viewed as a demon under Christian demonology.
    
    `,
    origins: ['Abrahamic', 'Ars Goetia'],
  },
  {
    name: 'Bicorn',
    history: `Bicorn is a unholy unicorn with two sharp, spiraling horns on its forehead. If unicorns are considered holy, then bicorns are considered unholy, reviled as filthy beasts. The number 1 supposedly represents the purity of man, and 2 represents the seductions brought with the arrival of women. Bicorn supposedly represents the sin of adultery. Males are called bicorns, while females are called chichevaches ("thin cows"). It is said that the unicorn was born from a bicorn and once had two horns itself.

    It is said to be the opposite of a Chichevache or Unicorn`,
    origins: ['European'],
  },
  {
    name: 'Bishamonten',
    history: `Bishamonten (毘沙門天), also known as Tamonten, is one of four figures placed at the corners of the main altar in a Buddhist temple. These figures correspond to the four cardinal directions, with Bishamonten representing the north. Bishamonten originated as a deity of wealth Kubera in Hindu mythology and came to Japan with many attributes: guardian of the realm of the north, guardian of Buddhist law, god of victory in war and god of wealth and good fortune. Bishamonten is also one of the Seven Lucky Gods in Japanese mythology.

    Outside Japan, his name is Vaiśravaṇa, and in Tibet he is a dharmapala and one of the eight main dharmapalas, alongside Mahakala, Yama Yamantaka, Hayagriva, Palden Lhamo, Tshangspa Dkaro and Begste. In East Asian regions, his statues usually have one hand lifting up a miniature pagoda which is claimed to contain Śarīra in some beliefs. Another hand would carry either a Dhvaja, umbrella or polearm.`,
    origins: ['Buddist', 'Japanese', 'Chinese', 'Tibetan'],
  },
  {
    name: 'Biyarky',
    history: `The Byakhee, or the Biyarky, are eldritch servants of the Great Old One Hastur the unspeakable. They are a race of hybrid creatures made of ordinary matter that live in interstellar space. A hybrid who is neither completely crows, nor moles, nor buzzards, nor ants, nor vampire bats, nor decomposed human beings, they can neither be fully perceived nor remembered by a sane person. The Byakhee are creatures of about three meters, capable of flying carrying a rider and that can move floating at will in space and moving at light speed.

    They can travel through space and carry a rider, but the rider must have something capable of protecting them from the cold and vacuum of space. They can be summoned to Earth to carry out tasks or act as steeds. Byakhee need not breathe, and do not appear on Earth unless summoned by sorcerers or called by their master, Hastur. Still, there is a chance that they will go down to any planet if they need to hunt for food.`,
    origins: ['Lovecraftian', 'Cthulhu Mythos'],
  },
  {
    name: 'Black Frost',
    history: `Black Frost is Atlus' evil rendition of the more good-spirited demon Jack Frost. The word ja'aku in its Japanese name when written in kanji (邪悪) means "wicked" or "evil," hence its dark characteristics.
    `,
    origins: ['Original Creation', 'Atlus'],
  },
  {
    name: 'Black Ooze',
    history: `n the Dungeons & Dragons fantasy role-playing series, an ooze is a type of creature. This category includes such monsters as slimes, jellies, deadly puddings and similar mindless, amorphous blobs. They can be used by Dungeon Masters as enemies or allies of the player characters.

    Many oozes dwell underground, and most secrete an acid from their skin that dissolves flesh and other materials rapidly.
    
    Oozes are essentially blind, but more than make up for that with an ability called "blindsight," which allows them to discern nearby objects and creatures without needing to see them visually.`,
    origins: ['American', 'Pop-culture'],
  },
  {
    name: 'Black Rider',
    history: `The third of the Four Horsemen of the Apocalypse, riding a black horse, is popularly called Famine. The black color of the third horse symbolized death and famine. The rider is shown holding a scale, which represents scarcity of food, higher prices and famine, likely as a result of the wars caused by the second horseman. Food will be scarce, but luxuries such as wine and oil will still be readily available.

    The "a measure of wheat for a penny" from the King James Version of the Bible might not sound like a famine to modern ears, but in the NIV we read "a quart of wheat for a day's wages," which is a little clearer. While it's never identified as his own, it is implied that the voice John the Apostle hears coming from "the third of the four living creatures" comes from the Black Rider, making it the only horseman that actually vocalizes his intentions, the aformentioned raise in prices.
    
    "When He broke the third seal, I heard the third living creature saying, “Come.” I looked, and behold, a black horse; and he who sat on it had a pair of scales in his hand. And I heard something like a voice in the center of the four living creatures saying, “A quart of wheat for a denarius, and three quarts of barley for a denarius; but do not damage the oil and the wine.”
    
    &mdash;Revelation 6:5-6`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Bugs',
    history: 'Bugbear, or simply Bugs, is a type of Hobgoblin that is comparable to Boogeyman/Bugaboo in folklore. Bugbear was used to frighten children into behaving or obeying their parents. Its name is derived from the Celtic word bug which means "evil spirit" or "goblin." In lore, the Bugbear was depicted as a creepy bear that lurked in the woods to scare children.',
    origins: ['English'],
  },
  {
    name: 'Byakko',
    history: 'The White Tiger, also known as the White Tiger of the West or Bai Hu, is one of the Four Symbols of the Chinese Constellation (Si Xiang) along with Seiryu, Suzaku and Genbu. It represents the West, the autumn season and the element of Metal (Wind in the Japanese system). During the Han Dynasty, people believed the tiger to be the king of all beasts. Legend had it that when a tiger reached 500 years old, its tail would turn white. In this way, the white tiger became a mythological creature. It was said that the white tiger would only appear when the emperor ruled with absolute virtue or if there was peace throughout the world. Because the color white of the Chinese five elements also represents the west, the white tiger thus became a mythological guardian of the west.',
    origins: ['Chinese', 'Japanese', 'Korean'],
  },
  {
    name: 'Cait Sith',
    history: 'Cait Sith is a Fairy that takes the form of a cat. Its name means "fairy cat." The Cait Sith can converse in human tongues and walk on two legs, making no sound as it moves. It normally lives as a cat that travels back and forth between the cat kingdom and the human world. It has a white star-shaped mark on its chest. The Cait Sith appears in Irish and Scottish legends and served as the model for Puss-in-Boots.',
    origins: ['Irish', 'Scottish'],
  },
  {
    name: 'Cerberus',
    history: `In Greek myth, Cerberus, also known as Kerberos, is a monster and pet under Hades that guards the gates of the Greek underworld, the realm of Hades. It is generally depicted as a vicious, gargantuan dog with three heads, although accounts may vary. Cerberus is in fact the Latin transliteration of the Greek name Kerberos.

    Cerberus was one of the monsters born from the union of Echidna and Typhon, both as monstrous and hideous as their offspring. Echidna was half-woman, half-serpent, while Typhon was the most fierce of all creatures. Among his brothers, the most famous are Hydra, Chimera, and Orthrus.`,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Chernobog',
    history: `Chernobog is a Slavic deity, whose name means Black God. Chernobog is not often mentioned in Slavic pagan sources, but is mentioned by the Western Slavs. He is associated with destruction, darkness and the winter. Due to this, he wasn't worshiped but instead avoided, just like Baba Yaga. This conflicts with the Slavic pagan customs of pleasing gods/goddesses and spirits in order to gain their blessing and protection. He is also synonymous with evil and later became synonymous with the devil.

    Because the Slavs had no writing system prior to Christian rule, and the only accounts of Chernobog being from Christian sources, the origin of this deity is difficult to define accurately or validate from various sources. He became known during the 12th century among the Western Slavic tribes, meaning he was either not important or a "new" deity. In addition to this information, Belobog is not mentioned in the Chronica, an account of Slavic gods by a German monk, and Belobog isn't mentioned in any historic sources that describe the gods of various Slavic nations/tribes.`,
    origins: ['Slavic'],
  },
  {
    name: 'Chi You',
    history: `Chi You (蚩尤, Chī Yóu) is a deity in Chinese mythology that descended from Shennong. This half-man, half-bull war deity helped and lead the Hmong and Li Tribes fight against the Yellow Emperor: the king who is said to be the ancestor of all Han Chinese. The Yellow Emperor lost many of his initial battles with Chi You but won the final battle with the invention of the South Pointing Chariot that allowed him to navigate through the thick fog summoned by Chi You's forces. Chi You was then beheaded by Yinlong (Winged Dragon), one of the Yellow Emperor's top generals.

    He is worshiped in China as the god of war and weapons and, along with Huang Di, as one of the progenitors of the Chinese people. Shi Huang Di, the First Emperor of China, worshiped Chi You and attributed him to his success in conquering his rival states. Liu Bang, the founder of the Han Dynasty, was also noted to have worshiped at Chi You's shrine before his decisive battle with Xiang Yu.
    
    He also plays an important part in the Miao and Hmong people's mythologies and folklore, regarded as a sagacious king, godlike warrior and leader, but also as their punishing downfall from grace. According to the tale, Chi You was betrayed by his closest general and all of the Hmong, and executed by the Yellow Emperor, after forbidding the practice of polygamy out of disgust and a need for order. Still alive after his body is dismembered and torn into many pieces, he forever cursed his people to exile, persecution, insurrection, disunity, suffering and the deterioration of their culture until they all repented and prayed for his forgiveness for their sin of regicide, dishonorable betrayal of ethics and carnal selfishness.
    
    He is also known in Korea as Chi Wu Cheon Wang (lit. the Heavenly Lord Chi Wu), and some argued he was once worshiped as an ancestral god mainly by the people of Goguryeo (an ancient nation that shares ancestry with modern Koreans). Though this claim is unconvincing as it is only mentioned in the Hwandan Gogi (which was claimed to have been compiled in 1911) which is concluded as a false document.`,
    origins: ['Chinese', 'Korean'],
  },
  {
    name: 'Chimera',
    history: `In Greek mythology, Chimera is the offspring of Typhon and Echidna, the mother of beasts, and is the sibling of Cerberus and Orthrus. This monster breathes fire and is made up of parts from different animals; the general ones being the body and head of a lion, with a goat's head sprouting in the middle, and a snake's head for a tail. Other accounts include the Chimera being a three-headed animal, with a dragon being the third head.
    `,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Choronzon',
    history: 'Choronzon is mentioned by occultists in the 16th century, but became famous due to Aleister Crowley and his belief system, Thelema, described further in his book Liber AL vel Legis or the Book of Law. It is also called the Dweller in the Abyss or the Demon of Dispersion, and held vast amounts of knowledge. In a ritual with his follower Victor Benjamin Neuberg, Crowley claimed to have summoned Choronzon within a seal in the Sahara Desert, but could not control it.',
    origins: ['Occult', 'European'],
  },
  {
    name: 'Clotho',
    history: `Clotho is the youngest of the three Moirae Sisters, and is derived from the Greek personification of fate. Clotho spins the thread of life. Clotho was responsible for spinning the thread of human life. She also made major decisions, such as when a person was born, thus in effect controlling people's lives. This power enabled her not only to choose who was born, but also to decide when gods or mortals were to be saved or put to death.

    Clotho and her sisters (Atropos and Lachesis) were the daughters of Erebus and Nyx, though later they are said to have been born of Zeus and Themis. Clotho is also mentioned in the tenth book of the Republic of Plato as the daughter of Necessity. Her Roman equivalent is Nona.
    
    As one of the three fates her impact on Greek mythology was significant. Clotho, along with her sisters and Hermes, was given credit for creating the alphabet for their people, forced the goddess Aphrodite into making love with other beings, weakened the monster Typhon with poison fruit, persuaded Zeus to kill Asclepius with lightning, and even aided the gods in their war with the Giants by killing Agrius and Thoas with bronze clubs. Even though Clotho and her sisters were worshiped as goddesses, their representation of fate is more central to their role in mythology.
    
    Clotho also possess her life-giving powers in the myth of Tantalus, as shown when she brought Pelops, Tantalus' son, back to life, with the exception of his eaten shoulder, which was replaced by a chunk of ivory.`,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Crystal Skull',
    history: 'The Crystal Skulls were once believed to be pre-Columbian Mesoamerican artifacts. When all 13 skulls are closely gathered it is said to reveal the mysteries of the universe. However, no Crystal Skulls have ever actually been excavated by archaeological digs in the Americas and the skulls first found in the 1800\'s were likely manufactured in Europe by imported Brazilian quartz. They were likely made simply to capitalize on the growing fascination in artifacts from the New World.',
    origins: ['South American'],
  },
  {
    name: 'Cu Chulainn',
    history: `Cu Chulainn is an Irish mythical hero who appears in the stories of the Ulster Cycle, as well as in Scottish and Manx folklore. The son of the god Lugh and Deichtine (sister of the king of Ulster), he was originally named Setanta, but gained his better-known name as a child after he killed Culann's fierce guard-dog in self-defense, and offered to take its place until a replacement could be reared. Cu Chulainn trained in war under the goddess Scathach, who lives in the Land of Shadows, and earned the magic spear Gae Bolg. At the age of seventeen he defended Ulster single handedly against the armies of Queen Mab of Connacht in the epic Tain Bo Cuailnge. It was prophesied that his great deeds would give him everlasting fame, but that his life would be short; one reason he is compared to the Greek hero Achilles. He is known for his terrifying battle frenzy, in which he becomes an unrecognizable monster who knows neither friend nor foe. He fights from his chariot, driven by his loyal charioteer Laeg, and drawn by his horses, Liath Macha and Dub Sainglend.

    Many say he acquired a lot of power by submitting himself to some geis, two of which are "I'll never eat dog meat" and "I'll never refuse a meal offered by a woman." But then a woman offered him some dog meat, as so he had to choose what geis to break and he accepted the meal. After that, he was forced by Mab to break his geis one by one, as so he met his death at the hands of Lugaid (child of Cu Roi, a man he had to kill to defend Ulster). He once spurned the goddess Morrigan and was cursed to die by being pierced on his own spear. Afterwards, Morrigan took him to the land of the fairies, where he became a knight.`,
    origins: ['Irish', 'Scottish'],
  },
  {
    name: 'Cybele',
    history: `Cybele is the deity of Phrygia, an Indo-European territory, that represents the idea of a mother goddess, similar to Gaia of the Greeks. Cybele is also associated with various natural elements, including wildlife and vegetation.

    In Greece, Cybele was a protector of several city-states, one of which is Athens. Her most celebrated Greek rites and processions showed her as a foreign and exotic mystery-goddess. She arrives in a lion-drawn chariot to the accompaniment of wild music, wine and a disorderly, ecstatic following. She was unique among deities worshiped by the Greeks as she had a transgendered, or eunuch, priesthood. Many of her Greek cults included rites to a divine, castrated, Phrygian shepherd-consort known as Attis. She is associated with mountains, town and city walls, fertile nature and wild animals, namely lions.
    
    In Rome she was known as Magna Mater, meaning Great Mother. They would reinvent her as a Trojan goddess, which made her a goddess ancestor of the Roman people by way of the Trojan prince Aeneas. With Rome's eventual dominance over the Mediterranean, a Roman version of Cybele's cult would spread throughout the entire empire.`,
    origins: ['Greco-Roman', 'Greek', 'Roman', 'European'],
  },
  {
    name: 'Daisoujou',
    history: `Daisoujou is a being based on the Buddhist mummies, Sokushinbutsu. These monks performed self-mummification by starving themselves for about three years. At the end of these three years, they were entombed alive with just enough room to sit crosslegged. A tube was placed in the ground, leading to the tomb for air. The monk had a bell with him and every day, someone would listen for the bell to make sure the monk was still alive. When the bell no longer rang, the air tube was removed and the tomb was completely sealed. A thousand days later, the body would be exhumed. If it was preserved, it was revered as a god and were said that one will appear in front of people on the day of salvation.

    It is also a title given to a highly virtuous monk who has attained Buddhahood during his lifetime. Among those named as Daisoujou is the founder of Shingon Buddhism, Kuukai.`,
    origins: ['Buddhist'],
  },
  {
    name: 'Dakini',
    history: `A dakini is a tantric deity described as an embodiment of enlightened energy that resembles a female. In each of her various guises, she serves as each of the Three Roots. She may be a human guru, a yidam or she may be a protector.

    In Japanese Buddhism, dakini are recognized as fox spirits and are also recognized as a goddess called Dakiniten, who is associated with Inari and Daikoku-ten.`,
    origins: ['Buddhist', 'Tibetan'],
  },
  {
    name: 'Decarabia',
    history: `According to the writings in The Lesser Key of Solomon, Decarabia, also known as Carabia, is the sixty-ninth demonic spirit listed in the Ars Goetia.

    Although he has no title in the Pseudomonarchia Daemonum, in the Lesser Key of Solomon he is a Great Marquis of Hell and has thirty legions of demons under his command. When summoned, Decarabia appears as a pentagram star, although he will take the form of a man if the conjurer requests it. He knows the properties and values of all herbs and precious stones, and can transform into any type of bird to sing and fly for his conjurer, sometimes acting as his animal familiar.`,
    origins: ['Ars Goetia'],
  },
  {
    name: 'Dionysus',
    history: `Dionysus is the ancient Greek god of wine, wine cups, wineskins, grapes and fertility. He inspires ritual madness, joyful worship, ecstasy, carnivals and celebration. He is sometimes included as one of the twelve Olympians. He was also known as Bacchus, the name adopted by the Romans and the frenzy he induces, bakkheia. In addition to wine-making, he is the patron deity of agriculture and the theater. Hailed as an Asiatic foreigner, he was thought to have had strong ties to the East and to Ethiopia in the South. He was also known as the Liberator, freeing one from one's normal self, by madness, ecstasy or wine. The divine mission of Dionysus was to mingle the music of the aulos and to bring an end to care and worry. Scholars have discussed Dionysus' relationship to the "cult of the souls" and his ability to preside over communication between the living and the dead.

    In Greek mythology, Dionysus is made out to be a son of Zeus and the mortal Semele. He is described as being womanly or "man-womanish." The retinue of Dionysus was called the thiasus and was chiefly comprised of maenads and satyrs. Dionysus is a god of mystery religious rites. One of the most famous mystery religions was the Eleuinian Mysteries, in which Dionysus may have had a minor role. In the Thracian Mysteries, he wears the bassaris or fox-skin, symbolizing new life. His own rites, the Dionysian Mysteries, practiced by maenads ad others, were the most secret of all. Many scholars believe that Dionysus is a syncretism of a local Greek nature deity and a more powerful god from Thrace or Phrygia such as Sabazios or Zalmoxis.`,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Dominion',
    history: 'In the Christian hierarchy of Angels, Dominions, also known as Lordships, are part of the second sphere and are said to watch over nations and regulate the duties of lesser angels. In Moses Maimonides\' hierarchy of angels, according to Jewish lore, they are Hashmallim (the fourth rank of angels) and are mentioned briefly in the Hebrew version of the Book of Ezekiel.',
    origins: ['Abrahamic'],
  },
  {
    name: 'Eligor',
    history: `Eligor, also known as Eligos, Abigor or the Great Duke of Hades, is the 15th demonic spirit of the Ars Goetia and a fallen angel. He governs over 60 legions of spirits. He is a great duke and appears in the form of a goodly knight carrying a lance, pennon (flag) and a scepter (a serpent to Aleister Crowley). Alternatively he is depicted as a ghostly specter, sometimes riding a semi-skeletal (sometimes winged) horse, or the Steed of Abigor. This is a minion of Hell itself, and was a gift from Beelzebub. It was created from the remains of one of the horses of the Garden of Eden.

    He can discover hidden objects, kindles love and lust, knows the future of wars and how soldiers should meet, along with procuring the favor of lords, knights and other important people. He is apt for divination and the performance of spells to strategize one's life. In modern military terms he is a high-ranking General who not only understands the subtle strategies of warfare, but also has the ability to foresee an enemy's position and tactics ahead of the battle itself.
    
    He marshals armies and causes war. He teaches leaders how to win the loyalty of soldiers. According to the Grand Grimoire, he is a direct subordinate of Fleurety.
    `,
    origins: ['Ars Goetia'],
  },
  {
    name: 'Emperor\'s Amulet',
    history: 'The Talisman of Charlemagne is an amulet with a True Cross and the supposed hair of Mary between the two large sapphires. It once belonged to the King of the Franks Charles I.',
    origins: ['European artifact'],
  },
  {
    name: 'Fafnir',
    history: `In Norse mythology, Fafnir was the son of the dwarf king Hreidmar and the brother of Regin and Ótr.

    After Ótr was killed by Loki, Hreidmar received the cursed gold of the dwarf Andvari's as repayment for the loss of his son. Fafnir and Regin then killed their father to get the gold, but Fafnir decided he wanted it all, becoming a dragon (symbol of greed). Regin then sent his foster-son, Sigurd, to kill the dragon. Sigurd succeeded by digging a pit under the trail Fáfnir used to walk to a stream and plunging his sword Gram into his heart as he walked past. Regin, however, corrupted by the curse on Andvari's gold, planned to kill Sigurd to take the treasure for himself, but Sigurd, having eaten part of Fafnir's cooked heart, was warned by birds of Regin's attack and ended up killing him.`,
    origins: ['Norse'],
  },
  {
    name: 'Flauros',
    history: `Flauros is the 64th spirit of the Goetia. He is a great duke and appears at first as a mighty terrible and strong leopard but at the command of his summoner he assumes the shape of a man with fiery eyes and a terrible countenance.

    He can see the past and future, but unless he is commanded into a triangle he will lie in all those things. He will gladly talk of divinity and of the creation of the world, and of his and other spirits' falls from grace.
    
    He can control fire and burn all of his and his summoner's adversaries to death and will not suffer them to be tempted by any spirit or otherwise. He governs 36 legions of spirits.`,
    origins: ['Ars Goetia'],
  },
  {
    name: 'Forneus',
    history: `According to the writings in The Lesser Key of Solomon, Forneus is the thirtieth demonic spirit listed in the Ars Goetia. He is a Great Marquis of Hell with twenty-nine legions under his command, partly comprised of the order of angels and thrones, and appears as a sea monster. When summoned, he can make men well-versed in rhetoric, give him a good name, teach him foreign tongues, and make him trusted by friend and foe alike.

    His name seems to come from "fornus" (oven). He can take many different forms but mainly prefers his human form.`,
    origins: ['Ars Goetia'],
  },
  {
    name: 'Fortuna',
    history: `Fortuna, also known as Lady Fortune, is the goddess of fortune, chance, and luck in Roman mythology, daughter of Jupiter and Venus. She can be represented veiled or blind. She is believed to have originally been a goddess of blessing and fertility, mainly being worshiped by mothers. She was also treated as the personification of Luck. She is the Roman counterpart of the Greek minor goddess Tyche.

    Her cult dedicated the date of June 11th, and on June 24th a festival called Fors Fortuna was held in her name. She was an important goddess in the day-to-day lives of the Roman people, and was later merged with the Egyptian goddess Isis. In antiquity, she was also known as Automatia.
    
    This goddess, unlike others, didn't disappear from culture when Christianity settled in Europe, and she was often referred to depicted in poetry and painting, being called Lady Fortune. She is also one of the entities that can be seen in the Wheel of Fortune tarot card.`,
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Futsunushi',
    history: 'Futsunushi-no-kami (経津主神) is a Shinto deity of swords. He is regarded as the personification of the sword Futsu-no-mitama.',
    origins: ['Japanese'],
  },
  {
    name: 'Fuu-Ki',
    history: 'Fuu-Ki is one of the four Oni that was summoned by Fujiwara-No-Chikata. Fuu-Ki can harness powerful winds which it uses to blow away enemies.',
    origins: ['Japanese'],
  },
  {
    name: 'Gabriel',
    history: `In Abrahamic religion (which encompasses Christianity, Judaism and Islam), Gabriel is a high-ranking messenger angel. Their name means "God is my strength" and is known to be the left hand of God and the embodiment of the holy spirit, in contrast to Michael who is the right hand of God. To Christians, Gabriel's primary task is that of a messenger who told Elizabeth that she would bear John the Baptist and Mary that she would bear Jesus, meaning they are remembered each Christmas/Advent as the messenger of the Annunciation or Immaculate Conception (it was also Gabriel who asked Mary to name her son Jesus, meaning "savior.") They are also mentioned as announcing the prophecy of seventy weeks to Daniel and is also recognized as St. Gabriel, the patron saint of communications workers. For Muslims, Gabriel is especially noted for revealing the Qur'an to Muhammad and for being the messenger that tells prophets of their obligations. In Islam, Gabriel is the highest-ranking angel, while Raphael is the second. They are also called the holy spirit in Islam.

    While typically thought to be male or of a neutral gender in early texts, some schools of thought believe that the portrayal of Gabriel's feminine face in art denotes that Gabriel is in fact a female angel. This may be in contrast to Michael's male role as the right hand of God, but the subject is still largely debated in religious circles. When portrayed as a female, Gabriel often holds a lily, suggesting a gentle feminine nature. Gabriel is the Angel of January and is associated with the zodiac sign Aquarius.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Ganesha',
    history: `Ganesha (also called Ganesh or Ganesa) is one of the most worshiped deities in the Hindu pantheon and is known as the Lord of Obstacles, Lord of Beginnings, god of wisdom and intelligence and patron of arts and science. He is the son of Shiva and Parvati and depicted as having the head of an elephant (often with one broken tusk), a pot-belly and anywhere from two to six arms.

    There are several popular Hindu stories as to Ganesha's origins and how he got his elephant head. While some say Ganesha was born with the head of an elephant, most say it was replaced by Shiva. In one story Parvati placed Ganesha as the guard to her bathhouse to which he agreed. When Shiva came and wished to see his wife, Ganesha refused, which infuriated Shiva. The two battled until Shiva in his anger cut off Ganesha's head. When Parvati saw what Shiva had done, he apologized and hastily searched for a new head. He took the first head he saw, which was that of an elephant, and placed it on Ganesha's shoulders. In some versions of this story, Ganesha already had an elephant's head, and it was at this point that Shiva threw his trident and broke off one of his tusks.
    
    In another story, Parvati was so proud of her newborn son that she invited all the other devas to a feast so that they may see how perfect and handsome he was. Among the guests was Parvati's brother Shani, who was cursed with the evil eye. When he looked upon Ganesha his head was instantly burned to ashes. Luckily Brahma was present and agreed that he would allow Ganesha to live if the head of the first creature that was found was placed on his shoulders. Vishnu sent out Garuda to search for a head, and he returned with the head of an elephant. The head was placed on Ganesha's shoulders, and he was allowed to live again.`,
    origins: ['Hindu'],
  },
  {
    name: 'Garuda',
    history: `The Garuda is a large mythical bird or bird-like creature that appears in both Hindu and Buddhist mythology.

    In Hindu mythology, a Garuda is a lesser Hindu divinity, usually the mount of Vishnu. Garuda is depicted as having a golden body, white face, red wings and an eagle's beak, but with a strong man's body. He wears a crown on his head. He is ancient and has size enough to block out the sun.
    
    In Buddhist mythology, the garudas are enormous predatory birds with intelligence and social organization. Like the Nagas, they combine the characteristics of animals and divine beings, and may be considered to be among the lowest devas. In Japan, he is called the Karura, a beast that breathes fire and attacks anyone unless they convert to the teachings of Dainichi Nyorai or unless they are a dragon wearing a Buddhist talisman.
    
    The exact size of the garuda is uncertain, but its wings are said to have a span of many miles. This may be a poetic exaggeration, but it is also said that when a garuda's wings flap, they create hurricane-like winds that darken the sky and blow down houses. A human being is so small compared to a garuda that a man can hide in the plumage of one without being noticed. They are also capable of tearing up entire banyan trees from their roots and carrying them off.
    
    In both Hindu and Buddhist mythologies, the Garuda is an enemy of the Naga race.`,
    origins: ['Hindu', 'Buddhist'],
  },
  {
    name: 'Genbu',
    history: `The Black Tortoise, also known as the Black Warrior, Black Tortoise of the North or simply Xuan Wu, is one of the four symbols of the Chinese constellation (Si Xiang) along with Seiryu, Suzaku and Byakko. It represents the north, the color black, winter and the water element. It is usually depicted as both a tortoise and a snake, specifically with the snake coiling around the tortoise. He is also known as Hyeonmu or Huyền Vũ in some other translations.

    Gui Xian (龜仙) in some of the official English versions is a misnomer because "Gui" belongs to a different concept of the Chinese four benevolent animals (Si Ling or Ssu-Ling).
    
    `,
    origins: ['Chinese', 'Japanese', 'Korean'],
  },
  {
    name: 'Girimehkala',
    history: `Girimekhala[1] is a large demonic elephant from Sri Lankan mythology. It is said to be the mount of the demon lord Mara, who tried to tempt Buddha so that he could not achieve enlightenment. The Girimekhala's most prominent feature is its one huge eye, which is said to carry a powerful curse. Anyone that looks into its eye will fall ill and cannot be cured.

    It is suggested that Girimekhala is a demonized Ganesha or Airavata from Hinduism, as Buddhist Sri Lankans and the Hindu Indians have come into conflict several times throughout history.`,
    origins: ['Sri Lankan', 'Buddhist'],
  },
  {
    name: 'Hanuman',
    history: `Hanuman, also known as Anjaneya (son of Anjana, an Apsara), is son of the wind god Vayu. He is as tall as a mountain, his face shines scarlet, and he has a long tail. He is the hero of the monkey army. His roar is like thunder, he is able transform into anything, fly, and has great strength.

    He is one of the most important characters in the epic Ramayana where is perform many heroic feats. He is most famously known for aiding prince Rama (one of the avatars of Vishnu) in defeating the demon king Ravana by leading an army of monkeys.`,
    origins: ['Hindu'],
  },
  {
    name: 'Hariti',
    history: 'A demoness originating from what is now called Pakistan, Hariti was originally an ogress who slew human children in her desperation to feed her hundreds of children. After the arrival of Buddhism, which came to Pakistan as a missionary religion, the legend of Hariti was given a new twist by Buddhist missionaries; being that, in order to put a stop to this way of feeding on the blood of children, Gautama Buddha hid away Priyankara, one of Hariti\'s sons, under a rice bowl and then pointed out to her that the suffering she was experiencing from losing one out of her hundreds of children could not be compared to that of the human mothers whose few children became her victims. Remorseful for her deeds, Hariti pledged to become the protector of childbirth and children and converted to Buddhism. From then on, she and her brood fed on pomegranates as a substitute for human flesh. This new image of her is what was incorporated into Buddhist lore, which because it came to comprise local Bactrian mythology, took on a new flavor before it spread from northern and western Pakistan to China and the other far reaches of Asia such as Japan.',
    origins: ['Buddhist', 'Pakistan'],
  },
  {
    name: 'Hastur',
    history: `While Hastur is best known as part of the Cthulhu Mythos, he was originally created by Ambrose Bierce in the short story "Haita The Shepherd." He later appeared in one work by HP Lovecraft, but is best known for his role in August Derleth's stories. Hastur is the half-brother of Cthulhu.

    He is also known in other names:
    
    The Feaster from Afar, a black, shriveled, flying monstrosity with tentacles tipped with razor-sharp talons that can pierce a victim's skull and siphon out the brain
    The King in Yellow
    He Who Is Not To Be Named as saying Hastur's name three times in a row (Hastur Hastur Hastur) brings the chanter death.
    The King In Yellow is also the title of a fictional stage play within the Cthulhu Mythos, where Hastur is mentioned, as well as a real-life short story collection in which the stage play appears several times. Hastur's Material Card features the cover of this book.`,
    origins: ['Lovecraftian', 'Cthulhu Mythos'],
  },
  {
    name: 'Hecatoncheires',
    history: 'Known as Hekatonkheires or Hecatonchires, they were giant beings from Greek myth. Having one hundred hands and fifty heads, their father Ouranos found them disgusting and threw them into Tartarus. Eventually, Zeus would free them and they would aid the gods against the Titans.',
    origins: ['Greco-Roman', 'Greek', 'Roman'],
  },
  {
    name: 'Hell Biker',
    history: 'Hell Biker\'s name in Japanese versions refers to Hells Angels, an American biker gang formed in 1948.',
    origins: ['American', 'Pop-culture'],
  },
  {
    name: 'High Pixie',
    history: 'High Pixies are high ranking pixies that act as leaders or commanders of younger pixies. Generally, a charismatic pixie can obtain this rank from proving its skill and loyalty. They watch over the younger pixies as guardians, and ensure they are kept out of danger, although they are every bit as mischievous as their younger counterparts.',
    origins: ['English'],
  },
  {
    name: 'Hope Diamond',
    history: `The Hope Diamond is one of the most famous jewels in the world, with ownership records dating back almost four centuries. Its much-admired rare blue color is due to trace amounts of boron atoms. Weighing 45.52 carats, its exceptional size has revealed new findings about the formation of gemstones.

    The stone was originated from the Kollur Mine, Golconda Sultanate (now in India). The stone is one from the world famous Golconda Diamonds. Earliest records show the stone was purchased in 1666 by French gem merchant Jean-Baptiste Tavernier as the Tavernier Blue. The Tavernier Blue was cut and yielded the French Blue (Le bleu de France), which Tavernier sold to King Louis XIV in 1668. Stolen in 1791, it was recut, with the largest section acquiring its "Hope" name when it appeared in the catalogue of a gem collection owned by a London banking family called Hope in 1839.
    
    After going through numerous owners, it was sold to Washington socialite Evalyn Walsh McLean, who was often seen wearing it. It was purchased in 1949 by New York gem merchant Harry Winston, who toured it for a number of years before giving it to the National Museum of Natural History of the United States in 1958, where it has since remained on permanent exhibition.`,
    origins: ['European artifact'],
  },
  {
    name: 'Horus',
    history: `Often identified with the sun, Horus (also known as Her, Heru, Hor or Har) was known as one of the most powerful gods of the Egyptian pantheon. He is the falcon-headed sun god and the prince of Egypt. Horus was occasionally shown in art as a naked boy with a finger in his mouth sitting on a lotus with his mother. In the form of a youth, Horus was referred as Neferhor, Nephoros or Nopheros (literal known as Good Horus). He is the son of the god Osiris and Isis, seeks revenge for his father's death at the hands of the god Set.

    He is most famous for his battle with the god Set for supremacy; The gods passed judgment on the battle between Horus and Set, ultimately favoring Horus as the god of day. It is said that he and Set have a never-ending battle, and when the sun rises, Horus begins to triumph, but when the sun sets, Set gains the upper hand. During these battles, Horus loses an eye until it is restored by Thoth. Thus, the "eye of Horus" symbol in Egyptian art represents healing.
    
    Since Horus was said to be the sky, he was considered to also contain the Sun and Moon. It became said that the Sun was his right eye and the Moon his left, and that they traversed the sky when he, a falcon, flew across it. Later, the reason that the Moon was not as bright as the Sun was explained by a tale, known as "The Contendings of Horus and Seth". In this tale, it was said that Set, the patron of Upper Egypt, and Horus, the patron of Lower Egypt, had battled for Egypt brutally, with neither side victorious, until eventually, the gods sided with Horus. As Horus was the ultimate victor he became known as "Horus the Great", but more usually translated "Horus the Elder". In the struggle, Set had lost a testicle, and Horus' eye was gouged out.
    
    Horus the Younger, Harpocrates to the Ptolemaic Greeks, is represented in the form of a youth wearing a lock of hair on the right of his head while sucking his finger. In addition, he usually wears the united crowns of Egypt, the crown of Upper Egypt and the crown of Lower Egypt. He is a form of the rising sun, representing its earliest light.
    
    The pharaoh of Egypt was also thought to be the human personification of Horus or his son, and was responsible for maintaining Ma'at, or balance, in Egypt. When the pharaoh died, he became the embodiment of Osiris.`,
    origins: ['Egyptian'],
  },
  {
    name: 'Hua Po',
    history: 'According to scripture Zi-bu-yu in Qing dynasty, Hua Po is a kind of tree spirit said to be formed from the disembodied souls of dead humans when three or more people hang themselves from the same tree. They appear as beautiful young girls that are dressed in white clothes but are much smaller than the average human. Although they cannot speak, it is said that they make sounds that are as beautiful as those of songbirds.',
    origins: ['Chinese'],
  },
  {
    name: 'Incubus',
    history: `An incubus is a demon in male form supposed to lie upon sleeping women in order to have sexual intercourse with them, according to a number of mythological and legendary traditions. Its female counterpart is the succubus. An incubus may pursue sexual relations with a woman in order to father a child, as in the legend of Merlin.

    Religious tradition holds that repeated intercourse with an incubus or succubus may result in the deterioration of health or even death. In medieval times, the church would use incubi and succubi to explain sexual functions, which were taboo subjects.`,
    origins: ['European', 'Abrahamic'],
  },
  {
    name: 'Inugami',
    history: 'In Japanese mythology, an inugami ("dog god") resembling, and usually originating from, a dog, (although other similar species are interpreted as being. e.g., wolves, raccoons, and weasels.) and most commonly carrying out vengeance or acting as guardians on behalf of their "inugami owner." Inugami are extremely powerful and capable of existing independently, (without master or possession) as well as turning on their "owners" and even possessing humans. Even so, while Inugami can betray their masters, they may also be the loyalest of companions.',
    origins: ['Japanese'],
  },
  {
    name: 'Ippon-Dattara',
    history: 'Ippon-Datara is a rarely seen creature, one is more likely to see his footprints on the mountains. Some believe he might be a blacksmith or the ghost of one.',
    origins: ['Japanese'],
  },
  {
    name: 'Ishtar',
    history: `Ishtar is the Babylonian and Akkadian goddess of love, war, and fertility, the Babylonian equivalent of the Sumerian goddess Inanna. She is also known as the "Queen of Heaven" and is the personification of the planet Venus. Her father is uncertain, sometimes claimed to be the daughter of Nanna, the moon god, or Anu, the sky god. She is also known as the "Lady of Battles" because she is known as a very violent deity. She is the creator and guardian of life. Her symbol is the eight-pointed star, and her holy city is Uruk (or Erech). Uruk is a town of sacred courtesans; part of her cult was devoted to prostitution.

    Ishtar's sister is Ereshkigal, the goddess of the realm of the underworld. Ereshkihgal cursed her sister, and Ishtar died. With Ishtar dead, the earth withered and would not produce, and neither animals nor human beings would bear young. With great effort, the water god Ea used magic to revive Ishtar, and Ereshkigal was not pleased. She demanded to trade her sister for someone else, finally deciding that her husband Tammuz (Dumuzid) would replace Ishtar for six months out of the year.
    
    In the Epic of Gilgamesh, she had many lovers, but all were fated to be killed or turned into animals at her hands. When the hero of the Epic of Gilgamesh, King Gilgamesh had spurned her, she had his best friend, Enkidu, murdered.`,
    origins: ['Mesopotamian', 'Babylonian'],
  },
  {
    name: 'Isis',
    history: `Isis, also known as Aset or Eset, was a mother goddess in ancient Egyptian religious beliefs, whose worship spread throughout the Greco-Roman world. She was worshiped as the ideal mother and wife, patron of nature and magic; friend of slaves, sinners, artisans and the downtrodden, as well as listening to the prayers of the wealthy, maidens, aristocrats and rulers.

    The goddess Isis was the first daughter of Geb, god of the Earth, and Nut, the goddess of the Overarching Sky, and was born on the fourth intercalary day. Isis was said to have blackmailed the true name of Ra the supreme sun god out of him, by making a snake poison him, which could only be cured by Isis herself. (Ra, being a god, cannot die from the poison, but the pain would still last.) In later myths about Isis, she had a brother, Osiris, who became her husband, and she then was said to have conceived Horus. Isis was instrumental in the resurrection of Osiris when he was murdered by Seth. Her magical skills restored his body to life after she gathered the body parts that had been strewn about the earth by Set.`,
    origins: ['Egyptian', 'Greco-Roman'],
  },
  {
    name: 'Jack Frost',
    history: 'Jack Frost is a spirit originating from England. He is a snow elf who brings in cold weather during the winter and is thought to be responsible for the frost that forms on the windows of homes and buildings.',
    origins: ['English', 'European'],
  },
  {
    name: 'Jack-o\'-Lantern',
    history: `Pyro Jack is named after the fabled figure Jack-O'-Lantern. According to the earliest accounts of the tale, "Stingy Jack" was an Irish farmer who persuaded the devil not to take him to hell. When he was refused entry into heaven, he wandered the earth as a turnip-headed (or pumpkin-headed) soul who would come to be called "Jack of the Lantern," or so says the legend. Jack-o'-lanterns are carved by children and enthusiasts alike on Halloween. The tradition can also be thought to help guide the lost soul himself.

    The legend, however, goes back further than the term itself. Jack-o'-lantern or some variation thereof was at the height of usage in 17th century Europe. Simply put, it meant "the guy with the lantern." Later the term would almost exclusively be used as slang in reference to the will-o'-the-wisp phenomenon, or ignis fatuus; due to the appearance of a far off person carrying a lantern.`,
    origins: ['English', 'Irish'],
  },
  {
    name: 'Jatayu',
    history: `Jatayu is a valiant bird in the legends that depicted it. In the Hindu epic Ramayana, Jatayu is an old friend of Rama. It attempted to rescue Rama's wife Sita after she was kidnapped by Ravana, the devil-king. A fierce battle ensued, but Ravana managed to defeat Jatayu by slashing its wings. In a Malay literature, Hikayat Merong Mahawangsa, Jatayu is the nephew of the giant bird Garuda. It was summoned by King Merong Mahawangsa, a friend of the prince of Rome, to rescue the prince's betrothed, a Chinese princess who was kidnapped by Garuda. Despite its determination, Garuda managed to overpower Jatayu.
    `,
    origins: ['Hindu'],
  },
  {
    name: 'Jikokuten',
    history: 'Jikokuten (持國天), or Dhṛtarāṣṭra in Sanskrit, is a guardian deity with fierce expression that protects the east of Buddha\'s realm. He is associated with the color white. In China, he is regarded as being harmonious and compassionate, using his pipa to play music in order to convert others to Buddhism. In Japan, his statues mostly carry a sword. He is also the leader of the Gandharvas, the celestial musicians and messengers. His name means "he who upholds the realm/nation."',
    origins: ['Buddhist', 'Japanese', 'Chinese'],
  },
  {
    name: 'Kaiwan',
    history: `Kaiwan, also known as Rephan, is an Astro-Mythological star deity in Assyrian mythology and that was worshiped by the Israelites before God was accepted. He is associated with the planet Saturn and became interchangeable names for the star-god Saturn. Thus Amos 5:26 refers to Kaiwan as “the star of your god”.

    He is associated with the stars and often assimilated with Sakkutthe, god of Saturn, and was once called the god of the sky. He is usually grouped with another god, Sakkut. In the Book of Amos of the Old Testament, it was said that he was still worshipped by some in Israel even after the worship of God became commonplace.
    
    Kaiwan was regarded as a god and was originally pronounced by the name of ῥαιφάν. This is one of the Egyptian names for the god Seb. It has been suggested that since it is vocalized like shiqqūts, ("detested thing"), in the text, there was a deliberate changing of the pronunciation to suggest the idea of the detestation of this god on the part of the Lord and His people. Still others suggest that the name comes from a Hebrew root word that refers to something on a pedestal or image stand.
    
    In Lovecraftian lore, Kaiwan is also one of the names of Hastur the Unspeakable.`,
    origins: ['Mesopotamian'],
  },
  {
    name: 'Kali',
    history: `Kali is a Hindu goddess associated with death, time and destruction. The name Kali means "black," but has by folk etymology come to mean "force of time (kala)." The name "Kali" means "black one" and is derived from the word "kala" (black), but has also come to mean "goddess of time". Despite her negative connotations, she is today considered the goddess of time and change. Although sometimes presented as dark and violent, her earliest incarnation as a figure of annihilation still has some influence. More complex Tantric beliefs sometimes extend her role so far as to be the "ultimate reality" or Brahman. She is also revered as Bhavatarini (literally "redeemer of the universe"). Comparatively recent devotional movements largely conceive Kali as a benevolent mother goddess.

    Kali is represented as the consort of god Shiva, on whose body she is often seen standing. She is associated with many other Hindu goddesses like Durga, Bhadrakali, Sati, Rudrani, Parvati and Chamunda. She is the foremost among the Dasa-Mahavidyas, ten fierce Tantric goddesses. Her sacred place is Calcutta, where she still retains many followers who worship her as a mother goddess.
    
    Kali is a fierce aspect of Durga who is an aspect of Parvati. She and Durga are also aspects of the Divine Mother, Shakti.
    `,
    origins: ['Hindu'],
  },
  {
    name: 'Kelpie',
    history: 'In Celtic mythology, a kelpie is said to be a supernatural water horse that haunts rivers and lakes in Scotland and Ireland. Its mane is black, but its skin is said to be cold as death. It is said to lure mortals into water, specifically young children, into drowning so it can eat them. The kelpie tempts children to ride on its back, and once the victims fall for the trap, the kelpie\'s skin is said to become adhesive.',
    origins: ['Irish', 'Celtic'],
  },
  {
    name: 'Kikuri-Hime',
    history: `Kikuri-Hime-no-mikoto (菊理姫 or 菊理媛命) means "Priestess Chrysanthemum," which is her symbolic flower and interactively associates with lamentation at death, is an agricultural and the harvest goddess of Kaga Hakusan in Japanese mythology. . She is briefly mentioned in Nihon Shoki that after Izanagi was driven out of Yomotsu Hirasaka (Shinto Netherworld), Kikuri-Hime mediated on behalf of Izanami so that the husband and wife could engage in a debate in their confrontation in Yomi. The exact content of this debate is not recorded, although there has been much conjecture. It is the actions of Kikuri-Hime that established the duty of Miko (Japanese priestess) of communicating with the netherworld on behalf of the living one. She has also been known as a goddess of matchmaking since ancient times.

    At an unknown point of history, Kikuri-Hime has been merged with a separate goddess worshipped in the shrine of Hakusan (White Mount), Shirayama-Hime-no-kami (白山比咩神), "Princess White Mountain." Today, the temple enshrines Kikuri-Hime (who is now treated as Shirayama-Hime) alongside Izanagi and Izanami.`,
    origins: ['Japanese'],
  },
  {
    name: 'Kin-Ki',
    history: 'Kin-Ki, also known as Kinki, is one of the four oni controlled by Fujiwara No Chikata during the Heian period of Japan. Named after gold, Kin-Ki\'s body is so strong that no physical weapons in existence can pierce it.',
    origins: ['Japanese'],
  },
  {
    name: 'King Frost',
    history: 'King Frost likely came from The Frost Fairies, a story written by Margaret T. Canby about King (Jack) Frost, a kind fairy king from the cold North.',
    origins: ['American', 'Pop-culture'],
  },
  {
    name: 'Kodama',
    history: 'A Kodama (木魅) is a spirit from Japanese folklore, which is believed to live in certain trees. Cutting down a tree which houses a kodama is thought to bring misfortune, and such trees are often marked with shimenawa rope.',
    origins: ['Japanese'],
  },
  {
    name: 'Koh-i-Noor',
    history: `The Koh-i-Noor is the world's largest natural colorless diamond mined from India. Its uncut form is said to weigh 186 carats. Within the British royal family, the diamond was rumored to bring bad luck to any man who wears it.
    `,
    origins: ['English'],
  },
  {
    name: 'Kohryu',
    history: 'Literally means Yellow Dragon (黃龍). It reigns over the Si Xiang, celestial creatures in Chinese constellation (Baihu, Xuanwu, Qinglong and Zhuque) and is located in the center of the four beasts. Huanglong is sometimes regarded to be the same as Qilin from the Si Ling. It is the embodiment of the element of Earth in Chinese five elements (Wu Xing).',
    origins: ['Japanese'],
  },
  {
    name: 'Koppa Tengu',
    history: 'In Japanese mythology, those who became Tengu and had ignorant or cruel hearts would become ko-tengu (small tengu) and those that were knowledgeable would become dai-tengu (big tengu). The koppa-tengu or "leaf Tengu" are among the smallest of the kotengu family, possessing very little spiritual energy. It is sometimes said wolves that live an exceptionally long life will become koppa-tengu and later will change into a form closer to a Karasu Tengu. The koppa-tengu often act as retainers and messengers to larger tengu, especially the Tengu King: Sojobo, a Kurama Tengu.',
    origins: ['Japanese'],
  },
  {
    name: 'Koropokkuru',
    history: `Koropokkuru are a race of small people in Ainu folklore. The name is traditionally analyzed as a tripartite compound of kor or koro ("butterbur plant"), pok ("under, below"), and kur or kuru ("person") and interpreted to mean "people below the leaves of the butterbur plant" in the Ainu language.

    The Ainu believe that the Koropokkuru were the people who lived in the Ainu's land before the Ainu themselves lived there. They were short of stature, agile and skilled at fishing. They lived in pits with roofs made from butterbur leaves.
    
    Long ago, the Koropokkuru were on good terms with the Ainu, and would send them deer, fish and other game and exchange goods with them. The little people hated to be seen, however, so they would stealthily make their deliveries under cover of night.
    
    One day, a young Ainu man decided he wanted to see a Koropokkuru for himself, so he waited in ambush by the window where their gifts were usually left. When a Koropokkuru came to place something there, the young man grabbed it by the hand and dragged it inside. It turned out to be a beautiful Koropokkuru woman, who was so enraged at the young man's rudeness that her people have not been seen since. Their pits, pottery and stone implements, the Ainu believe, still remain scattered about the landscape.
    `,
    origins: ['Japanese'],
  },
  {
    name: 'Koumokuten',
    history: 'Koumokuten (広目天), also known as Virūpākṣa in Sanskrit, is the guardian deity that protects the west of Buddha\'s realm. His name means "vast/all-seeing eyes." He has red skin and leads the troop of Nagas, the lesser snake-man gods. Some statues have him carry a Pasha which works similar to a lasso for capturing running target. Many of his attributes are very similar to Varuna, who happens to be the guardian of the west in Lokapala.',
    origins: ['Buddhist', 'Chinese', 'Japanese'],
  },
  {
    name: 'Kumbhanda',
    history: 'Kumbhanda is one of a group of dwarfish, misshapen spirits among the lesser deities of Buddhist mythology. They are known to suck the life out of humans and are servants of the southern member of the Four Heavenly Kings, Zouchouten.',
    origins: ['Buddhist'],
  },
  {
    name: 'Kurama Tengu',
    history: 'Kurama Tengu are the most powerful and well-known of the Japanese Tengu who were said to live in Mt. Kurama in Kyoto. The Kurama-Tengu are not only said to be exceptional warriors, but also have the ability to fend off disease and bring good luck. The king of the tengu, Sojobo, is one of the Mt. Kurama tengu, and in the 12th century was said to have taught the famous warrior Minamoto No Yoshitsune the arts of swordsmanship, tactics and magic.',
    origins: ['Japanese'],
  },
  {
    name: 'Kushinada-Hime',
    history: `n Japanese mythology, Kushinada-Hime, or simply Kushinada, was the daughter of two lesser gods of the Kunitsu, Ashinazuchi and Tenazuchi. She would later become the wife of the god of storms, Susano-o.

    According to the Shinto legend, after Susano-o was expelled from Heaven, he encountered two weeping earthly deities near a river in the Izumo Province. After asking why they wept, they explained that they had to give the Orochi one of their daughters every year to prevent his violent rampage, and now they must sacrifice their eighth and final daughter, Kushinada.
    
    Susano-o was taken aback by Kushinada's astounding beauty and asked for her hand in marriage. Kushinada agreed that if he could defeat the Orochi, she would be his bride. Susano-o then transformed her into a comb and placed her in his hair to hide her from the Orochi.
    
    After Susano-o had tricked and defeated the Orochi, he built a grand palace in Izumo where he and Kushinada were married. Together they produced Yashimashinumo, who is considered the ancestor of Okuninushi.`,
    origins: ['Japanese'],
  },
  {
    name: 'Kushi Mitama',
    history: 'Kusi Mitama, romanized as Kushi Mitama, is an aspect of the human soul known as the "wondrous soul," which appears together with Saki Mitama, the providing soul, which is the power behind the harvest. It is believed to be have mysterious powers, to cause transformations and to be able to cure illnesses, as according to Shinto belief.',
    origins: ['Japanese'],
  },
  {
    name: 'Lachesis',
    history: `In Greek mythology, Lachesis, also known as Lakhesis ("disperser of lots"), was the second of the Moirae Sisters, or Moirae. She was the apportioner, deciding how much time for life was to be allowed for each person or being. She measured the thread of life with her rod. She is also said to choose a person's destiny after a thread was measured.

    In mythology, it is said that she appears with her sisters within three days of a baby's birth to decide its fate. Her Roman equivalent was Decima. According to Hesiod's Theogony, she and her sisters (Atropos and Clotho) are the daughters of Nyx and Erebus. In other accounts, they are said to be the daughters of Zeus and Themis as well as several other beings such as Chaos and Ananke.
    
    Lachesis is also mentioned in the tenth book of the Republic of Plato as the daughter of Necessity. She instructs the souls who are about to choose their next life, assigns them lots and presents them all of the kinds, human and animal, from which they may choose their next life.
    
    Lachesis, along with her sisters and Hermes, was given credit for creating the alphabet for their people, forced the goddess Aphrodite into making love with other beings, weakened the monster Typhon with poison fruit, persuaded Zeus to kill Asclepius with lightning, and even aided the gods in their war with the Giants by killing Agrius and Thoas with bronze clubs. Even though Lachesis and her sisters were worshiped as goddesses, their representation of fate is more central to their role in mythology.`,
    origins: ['Greco-Roman'],
  },
  {
    name: 'Lakshmi',
    history: `In Hindu mythos, Lakshmi (Sanskrit: लक्ष्मी, lakṣmī) is the goddess of beauty, good fortune and love and is the wife of Vishnu, one of the Trimurti. She is also one of the Tridevi, which consists of Lakshmi, Parvati (Shiva's wife) and Sarasvati (Brahma's wife). She is known in Japan as Kichijoten as an extra deity in the Seven Lucky Gods who sometimes replaces Jurojin. She was one of the things that rose from the oceans after the Churning of the Sea of Milk.
    `,
    origins: ['Hindu'],
  },
  {
    name: 'Lamia',
    history: 'According to Greek mythology, Lamia was a Libyan queen who fell in love with Zeus and bore him children. Hera became enraged and murdered all of Lamia\'s children (one version of the tale claims that Hera forced Lamia to kill and eat her own children). Lamia went insane with grief and began kidnapping and eating children, eventually turning into a hideous monster as a result. Legend states that Zeus granted Lamia the ability to remove her own eyes at will so she would not see her dead children when she closed her eyes. In some sources, Lamia became a Naga.',
    origins: ['Greco-Roman'],
  },
  {
    name: 'Leanan Sidhe',
    history: `In Celtic folklore, the Irish leanan sídhe is a beautiful woman of the Aos Sí (or fairy folk) who takes a human lover. Lovers of the Leanan Sídhe are said to live brief, though highly inspired, lives. The Leanan Sídhe is generally depicted as a beautiful muse, who offers inspiration to an artist in exchange for fame and glory; however, this exchange frequently results in madness for the artist, and often premature death.

    They seek the love of mortals. If the object of their affection refuses, she must be their slave; if they consent, they are hers and can only escape by finding another to take their place. The fairy lives on with their life, leaving the object of a leanan sidhe's affection to waste away.
    
    The name comes from the Gaelic word "leannan," a sweetheart, concubine or favorite. Also, Sídhe, "of the fairy mounds."`,
    origins: ['Irish', 'Celtic'],
  },
  {
    name: 'Legion',
    history: `Legion is a single demon or a group of demons that combined into one which was referred in Christian literature. While the types of demons that make up Legion is unknown, they are purportedly said to be the same kind of demon that would inhabit a host and would have a single hive mind. The general form is a floating sphere composed of numerous featureless faces that acts as a shell concealing a center core of varying identity.

    The New Testament outlines an encounter where Jesus healed a man known as "the exorcism of the Gerasene demoniac." The demonic spirit who said "For we are many," in ancient scriptures. In that account, Jesus was said to have healed a man from a region in Caesaria Maritima in the Near East who was possessed by many demons. Jesus casts the demons out of the man, granting their request, and allows them to dwell in a herd of pigs. The pigs then drowned themselves in the Sea of Galilee.
    
    Their name comes from a Roman word meaning a unit of troops between 3,000 and 6,000 men. The name of Legion has also been used as the personal armies of high-ranking demons.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Lilim',
    history: `In Jewish folklore, Lilim (or Lilin) were dangerous creatures from Hell. They were said to be the children of Lilith by herself or by Samael, the angel of death. They are demons and are similar to succubi. Men feared the Lilim for this reason and women also feared the Lilim because it is believed that they kidnap children like their mother Lilith.

    They were also compared to the Empusa of ancient Greece.
    `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Lilith',
    history: `Lilith was originally a storm demon known as "Lilitu" in ancient Mesopotamian myth around 3000 BC and she was thought to have been the cause of disease, illness, and death. She later appears as a nocturnal demon in Jewish lore.

    In Judaism, Lilith was the first wife of Adam, however she was cast out of the garden of Eden for her sinful ways or because she desired to be his equal and refused to obey him. In one tale, she was the first to eat of the fruit of knowledge and wanted to be either equal to or greater than Adam. After she left the garden of Eden, she attempted to create her own garden and became the consort of many different demons, including the fallen angel Samael, and bore many demons including the succubi known as the Lilim.
    
    Meanwhile Adam grew lonely, and beseeched God to forgive Lilith and return her to Eden. God told Lilith that if she did not return, he would punish her by taking away her children. She refused, her children were taken, and since that day she has become a demoness at war with the sons and daughters of Adam, targeting children in specific. It is also said that she chokes newborn babies to death and feasts on their bones. According to one version, she was the one who sent the snake at Eve, and is usually depicted with snakes. In the later years, she became named as the wife of the devil.
    
    Another version of the story as told in the "Midrash Abkier," is that after Cain's homicide brings death to the world, Adam separates from Eve and fasts for 130 years. When the demoness Lilith (also known as Pizna) saw his beauty, she instantly desired him, and took him by force by using his own sin against him. She bore him many demonic spirits known to be a plague to mankind.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Loa',
    history: 'n Haitian mythology, Loa is an intermediary spirit between god and humans that expects to be properly served, not just communicated with.',
    origins: ['Haitian'],
  },
  {
    name: 'Lucifer',
    history: `Lucifer (Hebrew — הילל, Helel), or Lucifel, is a prominent figure in Abrahamic religions, with his most infamous act being rebelling against God and subsequently falling from grace. The name Lucifer is derived from earlier Latin proses and poetry; lux, lucis, "light," and fero, ferre, "to bear, bring," symbolizing his role as the "Morning Star" and the strongest seraph or archangel, the highest ranked angel serving God prior his fall from grace. Lucifer is also the demon who represents the sin of Pride.

    The reason for Lucifer's rebellion differs from interpretation to interpretation, however, three most accepted reasons fall in a refusal to bow down to mankind upon its creation, disagreement about God's plan of salvation or sinful pride in aspiring to overthrow his creator and become ruler of Heaven himself.
    
    While in modern literatures, Lucifer and Satan are treated as the same entity, the name Lucifer was never identified with Satan until the Latin translation of the Book Isaiah. A specific passage in the book refers to a King of Babylon, who is described to fall from heaven and is called Helel ("shining one"), a name which refers to the Morning Star or Day Star (the planet Venus), which subsequently became translated as Lucifer. In the Book of Peter, the name also referred to the Morning Star in general, but with no relation to the devil. Even Jesus Christ himself is sometimes called the Morning Star, though generally not "Lucifer" in Latin.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Macabre',
    history: 'A Macabre is a work of art with grim or ghastly atmosphere. Macabre works of art or fiction tend to emphasize the details and symbols of death. Danse Macabre or the "Dance of Death" works of art tend to depict the dead or Death itself summoning representatives from all walks of life to dance along to the grave. They were created to remind people of the fragility of their lives and how vain the glories of earthly life are. It is believed to originate from illustrated sermon texts.',
    origins: ['Abrahamic', 'European'],
  },
  {
    name: 'Mada',
    history: 'In Hinduism, Mada is the monster deity of drunkenness. According to the Mahabhrata, it was summoned by the sage Chyavana to subdue the deity Indra. The story goes that the twin deities Asvin restored Chyavana\'s youthfulness when the sage rued his aged complexion and compared it to his young wife Sukanya. Feeling grateful, Chyavana told them of a feast hosted by Indra, where the gods would drink the life elixir soma to retain their immortality. Apparently Indra did not allow the twin deities to enter as they had dabbled with mortals for too long. Saddened, they reported this to the sage, who decided to offer sacrifices to the twin deities to signify their godhood. This infuriated Indra, who attacked the sage with thunderbolts and mountains. Chyavana countered by summoning Mada, who was so enormous that its two sets of jaws could swallow the earth and heavens at the same time. Indra, worried that the gods are still in the heavens, surrendered and allowed the Asvin twins to join the feast.',
    origins: ['Hindu'],
  },
  {
    name: 'Makami',
    history: `Makami, also written as Oguchi-no-Magami, is a divine beast in Japanese mythology. People originally feared the Makami, eventually that strong emotion deified the beast. The Makami can see into the hearts of humans, protecting those who are good but punishing those are evil.

    It is often drawn on prayer boards used to ward evil, especially thefts and fire. But, there is also also feared as a human-eater. It is said that wolves became Makami.`,
    origins: ['Japanese'],
  },
  {
    name: 'Mandrake',
    history: 'A Mandrake, also known as a Mandragora, is a poisonous plant that grows from the graves of guilty dead men. In legend, if pulled from the ground, it makes a sound like scream of a dying child which is so horrible it either deafens or kills the person pulling it. It was generally used in all kinds of potions that promised amazing properties such as invulnerability, invisibility or immunity to the undead.',
    origins: ['European'],
  },
  {
    name: 'Mara',
    history: `In Buddhist myth, Mara is also known as "The Evil One," a tempter, through the deceit of regarding the mundane and negative as alluring, and personifies unwholesome impulses, unskillfulness and the "death" of the spiritual life. In many religions that incorporate the cosmology of the Hindu originated Trailokya, Mara is said to sit atop at the Sixth Heaven of the Desire Realm that includes the mortal world, and is said to be both that which ensnares souls in Samsara by deceiving them with promises of happiness in the Desire Realms, and who is the ultimate obstacle of any who desire to achieve enlightenment into nirvana and sunyata.

    Feeling threatened by the enlightenment the Buddha was trying to bestow upon humanity, he attacked Gautama Buddha when he was meditating beneath the bodhi tree. He was defeated when the Buddha simply touched the tips of his fingers to the earth, whereupon all the gods descended in a tremendous roar to pay homage to him. Though Mara was defeated that time, he still lingers in the world, hoping to seize the souls of the dying and unenlightened.
    
    Originated in Sri Lankan Buddhism, a demon who was riding Girimehkala with a penis-headed image tried to stop Siddharta Gautama from reaching enlightenment through meditation. The most common story depicts Mara using his beautiful daughters in an attempt to tempt the Buddha; he later marched his demonic army to scare him, however this ended in failure for Mara.
    
    Its manifestation in the series is likely a nod to the metaphor of Devaputra-mara, the disillusion of regarding Mara as an objective being.
    `,
    origins: ['Buddhist', 'Sri Lankan'],
  },
  {
    name: 'Maria',
    history: `Maria, also known as Beata Maria, the Virgin Mary or Marie, is the central female figure in many Christian doctrines, especially Catholicism, which regards her as a saint and as the "queen of heaven," ruling over all saints and angels and acting as an intermediary between humanity and God. Mary is also the queen of the White Rose, a realm of pure and utter blessings which resides within the Primum Mobile, the last celestial sphere of Heaven itself.

    According to the New Testament, she is the virgin mother of the Messiah, Jesus Christ, impregnated without removing her virtue by the Holy Ghost after being visited by either the archangel Gabriel or Anael. She assisted Jesus throughout her life and followed him in his preachings, she was also one of the women who were witness to his resurrection. She is said to have ascended to the heavens directly without dying.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Matador',
    history: 'Matador is derived from the late Latin word matare, which means to subdue or kill. It is also the name of the toreros that perform in the bullfighting events famous in Spain. Matador is one of the toreros, and the word literally means "killer," as it\'s the matador\'s job to kill the bull.',
    origins: ['European'],
  },
  {
    name: 'Melchizedek',
    history: `Melchizedek, also known as Melchisedech, Melkisetek or Malki Tzedek, is a biblical figure known for his wisdom. He was the king of Salem and priest of El Elyon mentioned in the 14th chapter of the Book of Genesis. He brings out bread and wine and then blesses Abram and El Elyon, in the time of Abraham.

    Chazalic literature, specifically Targum Jonathan, Targum Yerushalmi and the Babylonian Talmud, presents the name as a nickname title for Shem, the son of Noah. In Christianity, according to the Epistle to the Hebrews, Jesus Christ is identified as "High priest forever in the order of Melchizedek," and so Jesus assumes the role of high priest once and for all. Josephus refers to Melchizedek as a "Canaanite chief" in War of the Jews, but as a priest in Antiquities of the Jews. Philo identifies Melchizedek with the Logos as priest of God, and honored as an untutored priesthood.
    
    The Qumran Scrolls, also indicate that Melchizedek was used as a name of the archangel Michael, interpreted as a heavenly priest; Michael as Melchi-zedek contrast with Belial, who is given the name of Melchi-resha "king of wickedness." This connection with an archangel may be the reason he is sometimes treated as an angel in some depictions, specifically a power.
    
    Melchizedek is also an angel in Gnosticism, governing peace and righteousness. While Jesus was the savior of the people, Melchizedek was the savior of the angels, and sometimes is said to be greater than Christ himself. According to gnostics, he was the former king of Salem before ascending to heaven without dying.`,
    origins: ['Abrahamic', 'Gnostic'],
  },
  {
    name: 'Metatron',
    history: `Metatron (who is sometimes theorized to originally be Enoch, father of Methuselah and great-grandfather of Noah) is the voice of God. Whenever a human believes God has directly spoken to them, in reality it is Metatron acting as his vessel. One million eyes and mouths cover his body, and every mouth speaks a different language. He is the being who is the nearest in hierarchy to that of God. He is said to have the largest body among all of the angels, having 36 wings, 3 representing the triumvirate of the father (God), the son (Jesus Christ) and the holy ghost, multiplied by the 12 tribes of Israel (God's chosen people). In ancient Judaism, his status is even higher than that of the Archangel Michael (who the ancients believed to be Adam, the first man aka the Ancient of Days). He received various titles such as "Face of God," "Angel of Contracts" synonymous with the Iranian God Mithra, "King of Angels" and others of the like. His name literally means "He who sits behind the throne of Heaven." Metatron is also said to be the twin brother of the archangel Sandalphon.

    Although Metatron isn't an official angel according to the ecumenical teachings of modern Christendom (nor does he appear in any of the Old or New Testament books and letters of the Bible), his celebrity is certainly not without consequence. As put forth in several of the ancient Enochian texts (especially the Slavonic Secrets of Enoch text 2, one of many deuterocanonicals attributed to Enoch), Metatron takes on the heavenly role as God's mediator with all mankind. Some of said texts even go so far as to assert that Metatron is actually the holy ghost of Christianity (see 2 Enoch and 3 Enoch). As such, particularly to the Gnostics in upper Mesopotamia via the "Nag Hammadi" transcripts, Metatron is portrayed to be the most mysterious, as well as the highest, in the order of the heavenly host.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Michael',
    history: `Michael, also known as Mikail in Islam, is an Archangel, one of the principal 50 angels in Christian lore, and of the four archangels of Islamic tradition.

    In Christianity, he is viewed as the field commander of the Army of God and led it in the war against the Devil and the fallen angels. He is also a saint and thus carries the title "St. Michael The Archangel." He is mentioned by name in the Book of Daniel and the Book of Revelations. In the book of Daniel, Michael appears as "one of the chief princes" who in Daniel's vision comes to the angel Gabriel's aid in their contest with the angel of Persia, and is also described there as the advocate of Israel and "great prince who stands up for the children of your people." Michael's status in the army of Heaven is seen as a Viceroy or an Archistrage as well, but he's mostly seen as the commander of Heaven's army.
    
    In Hebrew, Michael means "who is like God", "Who is like God?" However, it does not mean that one should confuse him with being like God, instead it implies that no one is like God. In this way, Michael is reinterpreted as a symbol of humility before God.
    
    In Islam, Michael serves as one who delivered bounty and sustenance to all living things as commanded by God.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Mishaguji',
    history: 'Mishaguji was a native god worshiped in the ancient Shinto region of Japan before the Yamato took control, at which point the worship of it became a taboo. Mishaguji was the god of sexual intercourse and if he was left an offering, then sex would become better. It is said that Mishaguji\'s incarnation on Earth had a very phallic shape, possibly similar to an earthworm, and he would take shelter under rocks or stones. Once Yamato took control however, Mishaguji became seen as a god that only the undesirable and unfaithful would worship.',
    origins: ['Japanese'],
  },
  {
    name: 'Mithra',
    history: `In Zoroastrian mythology, Mithra was a deity of contracts who was the protector of truth and the enemy of error. He was created by the supreme deity Ahura Mazda as the greatest of all Yazatas and an important aid in the destruction of the demonic forces led by Angra Mainyu (also known as Ahriman) in later Persian sources. He was one of the three Yazatas alongside Rashnu and Sraosha who judged the souls of the dead.

    In Vedic mythology, Mitra is a god of honesty, friendship, meetings and contracts despite his role as an asura (although he is sometimes addressed as a deva). In this way, he was often paired with the asura Varuna where they were twinned as Mitra-Varuna. Together they were the gods of the oath and the most important Asura in the Vedic pantheon. Mitra was also another name for Surya.
    
    He is not to be confused with Mithras of Roman origin.`,
    origins: ['Zoroastrian', 'Persian', 'Vedic'],
  },
  {
    name: 'Mithras',
    history: `Mithras is a sun deity who was worshiped in the Roman empire from the 1st to the 4th century AD and is the patron of Mithraism. He was said to be reborn after death, and a festival was held on the winter solstice for him.

    Mithraism was a religion and cult worshiping the god that also originated from the Roman Empire from about the 1st to the 4th century. It is believed that the cult was popular in the Roman military and did not accept female disciples. Whether the god was directly inspired by the much older Mithra from Persia remains debatable. It is today considered a mystery religion due to lack of textual records of the cult, but many Mithraic temples and artifacts survive.
    
    He is said to be appear as a being born from a rock as an adult and holding a knife which would be used for bull-slaughtering, a ritual believed to be commonly practiced by the disciples in honor of the god.
    
    He has sometimes been confused with the Zoroastrian/Vedic deity Mithra.`,
    origins: ['Greco-Roman'],
  },
  {
    name: 'Mokoi',
    history: 'In Australian folklore, Mokoi are spirits of evil who kill those who used dark magic. They would also kidnap and eat children at night.',
    origins: ['Australian'],
  },
  {
    name: 'Moloch',
    history: `Moloch refers to either a god or a particular kind of sacrifice associated with fire. He was a demonic fertility deity, turned false deity, mentioned in varied theological writings; the most famous of which would be the Christian Bible. He appears, and is mentioned, in the Old Testament as a god that Moses forbade the Israelites to worship.

    Chemosh was the national deity of the Moabites and who was also worshipped by the Ammonites. He was called by the ancient Israelites as "the abomination of Moab." The fallen angel Belphegor was often connected to this deity.`,
    origins: ['Abrahamic', 'Canaanite', 'Semitic'],
  },
  {
    name: 'Mot',
    history: `Mot. also known as Mavet, is the Canaanite and Semitic god of death, infertility, drought and the Underworld who lives in the throne city which goes by the name Hemry, a pit is his throne, and Filth is the land of his heritage. He was worshipped by the people of Ugarit, by the Phoenicians, and also by the Hebrews of the Old Testament. In Ugaritic myth, Mot is a personification of Death.

    He is one of the sons of the high god El, he was the chief antagonist of the rain god Baal Hadad, whose life-giving waters brought fertility to the land. Mot was the Lord of the desert dryness, the underworld, and all that is opposed to life.
    
    According the Baal Cycle, Mot was called the "Darling of El" and was one of the primary actors in the annual fertility cycle. In this drama, Baal had defeated Ym and established his throne on Mount Saphon. A struggle then ensued, in which Baal and Mot battled for supremacy. Mot would continuously attempt to devour the Baal every few years. This exchange continued for a time until Mot's own father threatened to overturn his throne if the conflict did not end.
    `,
    origins: ['Canaanite', 'Semitic'],
  },
  {
    name: 'Mother Harlot',
    history: `Within the Book of Revelation, Mother Harlot is known as "Babylon the Great, Mother of Prostitutes and Abominations of the Earth," "Whore of Babylon", or The Harlot for short.

    She appears as wearing a purple robe. The color purple was associated with the Roman Empire, as well as the garments of the Roman Catholic clergy, and the Harlot and her beast can be seen as an allegory of the Roman Catholic Church and the Roman Empire respectively. The beast she rides has seven heads and Rome has seven hills, so the heads could reflect the ancient power of Rome, which traditionally was one of antiquity's most powerful empires. Alternatively, the heads of the beast could represent the seven great kingdoms of the ancient world and their rulers.
    
    One interpretation is that the seven heads represent the seven different forms of Roman governance: kings, consuls, decemviri (council of 10), dictators, triumviri (council of 3), caesars (military emperors) and despotic emperors. The Harlot is seen riding on the seven-headed beast as she represents the apostate church, The Roman Catholic Church, which rose to prominence on the back of the power of the Roman Empire. `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Mothman',
    history: 'Mothman is a cryptid of American origin. In the mid-1960s, there were some sightings of a great winged creature with massive reddish eyes. It is thought (outside of cryptozoology) that these might actually be misconstrued sandhill cranes or barn owls.',
    origins: ['American', 'Pop-culture'],
  },
  {
    name: 'Naga',
    history: `The naga are divine, semi-divine deities or a semi-divine race of half-human half-serpent beings that reside in the underworld (Patala) and can occasionally take human form. They are principally depicted in three forms: wholly human with snakes on the heads and necks, common serpents or as half-human half-snake beings. A female naga is a "nagi," "nagin" or "nagini," and are said to be both beautiful and clever. Nagaraja is seen as the king of nagas. They are common and hold cultural significance in the mythological traditions of many South Asian and Southeast Asian cultures.

    The nagas possess many of the world's finest jewels, which they use to illuminate the underground palaces in which they dwell. Because of their defensive powers, statues of nagas are often placed at the entrances of temples. In some depictions, they live in the bottoms of lakes and seas and enjoy singing and dancing when they are not fighting.
    
    In Buddhism and Jainism, a naga is a half-snake and half-human hybrid that resides in tribes. They are said to be the enemies of Garuda. They are also said to be the followers of Koumokuten, one of the Four Heavenly Kings. In Hinduism, they are usually depicted as human from the waist up and snake from the waist down. They are regarded as gods of the harvest, fertility and reincarnation. Their venom can kill with one strike, and their bodies are immortal and can heal from any wound.`,
    origins: ['Hindu', 'Buddhist'],
  },
  {
    name: 'Narcissus',
    history: 'Narcissus (Greek: Νάρκισσος) was a strong and beautiful boy of Greek mythology. He is also known for his cruel disposition; he rejected the love of the youths, boy and girl, who adored him. His final act of rejection led to him being cursed by the deity of retribution, Nemesis. He fell in love with his own reflection in the water, which inadvertently led to his death. Accounts vary on the circumstances that brought Narcissus to his watery death, and even the cause of his death differs; he either drowned himself trying to embrace the image, starved to death or killed himself for being unable to accept this love. Either way, a flower grew from the spot he died, which was named the "narcissus."',
    origins: ['Greco-Roman'],
  },
  {
    name: 'Nebiros',
    history: `Nebiros was first mentioned by Johann Wier in 1583 as Naberius. He is supposedly the most valiant Marquis of Hell, has nineteen legions of demons under his command. He makes men cunning in all arts (and sciences, according to most authors), but especially in rhetoric, speaking with a hoarse voice. He also restores lost dignities and honors, although according to Johann Wier he procures the loss of them.

    The 24th spirit of the Goetia, Naberius appears as a three-headed dog or a raven. He has a raucous voice but presents himself as eloquent and amiable. He teaches the art of gracious living. He is depicted as a crow or black crane.
    
    Concerning his name, it is unclear if there is an association with the Greek Cerberus. It is said that in 1583, Johann Weyer considers both of them to be the same demon. He claimed:
    
    "Naberius [Naberus], alias Cerberus, is a valiant marquesse, shewing himselfe in the forme of a crowe, when he speaketh with a hoarse voice: he maketh a man amiable and cunning in all arts, and speciallie in rhetorike, he procureth the losse of prelacies and dignities: nineteene legions heare (and obeie) him."
    
    The Grand Grimoire regards Nebiros as the Field Marshal and Inspector General of the armies of Hell. He can be conjured to inflict woes upon anyone, discover the Hand of Glory, teach the mystic and occult qualities of all animals, plants and minerals and supply necromantic advice. One of the three Goetic nobles under his direct authority is Naberius, suggesting that the Grand Grimoires author understood the two spellings to signify distinct demons. The other two subordinates are Glasya-Labolas and Ayperos.`,
    origins: ['Ars Goetia', 'Abrahamic'],
  },
  {
    name: 'Neko Shogun',
    history: `Neko Shogun is a divine general in the image of a cat. Originally, he was a Chinese general who conquered Vietnam: Mao Shangshu (毛尚書). The people decided to dedicate a temple to him and worship him as god. However, due to the name Mao (毛) sounding very similar to the Chinese word for cat (猫), the temple was accidentally misnamed. Thus, the Temple of General Mao became known as Temple of General Cat (猫将军).
    `,
    origins: ['Chinese'],
  },
  {
    name: 'Nekomata',
    history: 'In Japanese folklore, a nekomata, also known as a bakeneko, is a type of Yokai that appears as a cat with supernatural abilities akin to those of the fox or raccoon dog. A cat may become a bakeneko in a number of ways: it may reach a certain age, be kept for a certain number of years, grow to a certain size, or be allowed to keep a long tail. In the last case, the tail forks in two and the bakeneko is then called a nekomata. This superstition may have some connection to the breeding of the Japanese Bobtail.',
    origins: ['Japanese'],
  },
  {
    name: 'Nigi Mitama',
    history: 'In Japanese belief, it is the calm and functional state of a person\'s soul, or kami, which is considered to be the opposite of Ara Mitama. The Ara Mitama must first be pacified with rites and worship before the Nigi Mitama will appear.',
    origins: ['Japanese'],
  },
  {
    name: 'Norn',
    history: 'Derived from Norse mythology, Norn, also known as Nornir, refers to the numerous female beings who rule the fates of the various races that exist, the three most important being Urd, Verdandi and Skuld. They are said to live near a lake under the roots of Yggdrasil, the world tree.',
    origins: ['Norse'],
  },
  {
    name: 'Nue',
    history: `A legendary monster in Japanese mythology. Nue has the head of a monkey, the arms and legs of a tiger, body of a raccoon dog and a snake for a tail.

    According to The Tale of the Heike, Emperor Konoe, the Emperor of Japan, became sick after having terrible nightmares every night, and a dark cloud appeared at two o'clock in the morning on roof of the palace in Kyoto during the summer of 1153. The story says that the samurai Minamoto no Yorimasa staked-out the roof one night and fired an arrow into the cloud, out of which fell a dead Nue. Yorimasu then supposedly sank the body in the Sea of Japan.
    
    In a local expansion of the story, the Nue's corpse floated into a certain bay, and the locals, fearing a curse, buried it. A mound which exists today is supposed to be this grave.`,
    origins: ['Japanese'],
  },
  {
    name: 'Obariyon',
    history: 'The Obariyon is a Japanese "piggyback demon" from local folklore. While a person is walking along a woodland or grassy path, the Obariyon may jump out and attach itself to their back. While it cannot be seen, its weight can be felt by the person, and it becomes harder to walk. The Obariyon cannot be easily removed without the use of magic, but it is said if you can remove it and take it home, it will turn into many valuable gold coins.',
    origins: ['Japanese'],
  },
  {
    name: 'Oberon',
    history: `Oberon is the King of the Fairies and the husband of Titania, the Fairy Queen. He rules over moonlight, dreams, and all fairy rites. He first became widely known when he appeared as a character in Shakespeare’s "A Midsummer Night’s Dream," but appeared earlier in the 13th century French epic "Huon of Bordeaux." In some stories, specifically in "Huon of Bordeaux," it is said that he is the son of Morgan le Fey and Julius Caesar, believed to have been born some time after Caesar’s defeat of Pompey.

    Although he has the face of a handsome young man, a curse has made him no taller than a young child that he received shortly after birth. However, the curse gives him eternal beauty. He is polite and sometimes even friendly towards humans, however he can be a selfish, short-tempered ruler, often falling in love and flirting with human women, only to be restrained by his consort Titania. The two are said to have once lived in India, and they would cross the sea to Europe at night to dance in the moonlight.
    `,
    origins: ['English', 'Modern Fiction', 'European'],
  },
  {
    name: 'Odin',
    history: `Odin (Old Norse: Óðinn), meaning The Furious, is considered the chief god (known as an All-Father) in Norse mythology. He is associated with wisdom, war, frenzy, knowledge, battle and death and also magic, sorcery, poetry, the gallows, healing, royalty, prophecy, victory and the hunt, and is the husband of the goddess Frigg.

    Odin is often portrayed as being an eminently honorable ruler and battlefield commander, but to the ancient Norse, he was nothing of the sort. In contrast to more straightforwardly noble war gods such as Tyr or Thor, Odin incites otherwise peaceful people to strife with what is a downright sinister glee. He maintains particularly close affiliations with the berserkers and other “warrior-shamans” whose fighting techniques and associated spiritual practices center around achieving a state of ecstatic unification with certain ferocious totem animals. He is also known by hundreds of names some which includes: Wodan, Aldagautr, Biflindi, Bileygr, Draugadróttinn, Dróttinn, Fengr, Fjölnir, Forni, Grímnir, Hangi, Hávi, Jölnir and Vegtam.
    
    He only has one eye because he bartered the other in order to drink from the well of Mimir and gain its knowledge. He had many abilities like astral projection, shapeshifting and control of the elements and weather. He also could read magic runes that no one else could since he had hung himself from the World Tree Yggdrasil while inflicting self-torture in order to gain great knowledge.
    
    Odin is the chief god of the Norse pantheon. He and his brothers Ve and Vili killed the frost giant Ymir and built the world from his body. He is also the father of most of the gods, including Thor, Vidarr and Baldur, who was later killed by a manipulated Hod with a dart of mistletoe. He is associated with his spear Gungnir, the wolves Geri and Freki and the two ravens Hugin and Munin, and the eight-legged horse Sleipnir.
    
    Odin is given primacy over female beings associated with the battlefield, the Valkyries, and he himself oversees the afterlife location Valhalla of Asgard, where he receives half of those who die in battle, the Einherjar. The other half are chosen by goddess Freya for her afterlife location, Fólkvangr. In Ragnarok, he gets devoured by the great wolf Fenrir.`,
    origins: ['Norse'],
  },
  {
    name: 'Okuninushi',
    history: `Formerly known as Onamuchi, Okuninushi (大国主, Oukuninushi)? is one of the Kunitsu and former ruler of Izumo, until Ninigi took over. In compensation, he was made ruler of the unseen realm of spirits and magic. He's said to be the god of nation-building, business and medicine.

    Before becoming the ruler of Izumo, Okuninushi and his brothers, eighty gods altogether, were all suitors seeking the hand of Princess Yakami (or Yagami) of Inaba in marriage. They were all traveling together from their home country of Izumo to the neighboring Inaba to court her. 
    
    Along the way, the brothers encounter a poor little rabbit or hare, flayed and raw-skinned, lying in agony upon a sea shore. The group asks what happened, and the hare explains that he came from the island of Oki across the sea. The gods who listened on were cruel-hearted, and as a prank, instructed the hare to wash himself in the briny sea, and blow himself dry in the wind. The hare was of course in much more stinging pain than it was before.
    
    Then came along Ōkuninushi lagging far behind, due to evidently being treated as a luggage carrier. The gentle-hearted god told the hare to go to the mouth of the river and wash himself in the fresh water, then gather the flowering spikes of cattail plants growing all around and scatter the catkins on the ground and tumble around until he is covered by fleece. The cured rabbit makes a divined prediction that Okuninushi will be the one to win Princess Yakami.
    
    Just as the rabbit predicted, Princess Yakami/Yagami pronounces before the eighty gods that she chooses Okuninushi as her mate. The rival gods, his brothers, were all furious and conspire to slay him.
    
    They compel him, on pain of death, to chase down a red boar, which was really a boulder heated red hot. Okuninushi dies of burns, but his mother, Sashikuni-wakahime, petitions Kami-Masubi, one of the Kotoamatsukami, and she dispatches two clam goddesses, Kisagai-hime and Umugi-hime, to restore him.
    
    His rivals then trick him into walking onto a fresh tree log split open and held apart by a wedge, and snap him shut, killing him a second time. His mother revives him once again, and bids him to seek out Susano-o, who has been banished to the Netherworld.
    
    In the underworld, he met the storm god Susano-o and his daughter Suseri-Hime, with whom he shortly fell in love. Of course, Susano-o was aghast. In response, he sent Okuninushi through various trials, such as making Okuninushi sleep with snakes, centipedes and wasps and escape a burning meadow, which he survived thanks to a scarf that Suseri-hime gave him beforehand which protected him.
    
    By now, after all his various attempts of murder, Susano-o was beginning to actually approve of Okuninushi. One night, after he told Okuninushi to wash his hair and go to sleep, Okuninushi tied Susano-o's hair to the rafters of his palace, and fled with Suseri-hime. He took Susano-o's bow, arrows and koto with him. When the couple made their escape, the koto brushed against a tree, awakening Susano-o. The god jumped up, and pulled down the palace with his hair. At the borders of the underworld, Susano-o almost caught up with the elopers and called out to them, advising Okuninushi to fight his brothers with Susanoo's weapons. Okuninushi asked him to make Suseri-Hime his wife, and to build a palace at the foot of Mount Uka, which he agreed to. After the entire ordeal was over, Okuninushi became ruler of the province of Izumo.
    
    Sometime after this, Okuninushi was told to build the world with the help of the dwarf deity Sukuna-Hikona. The two together formulated the arts of medicine, means of controlling disasters caused by birds and insects and became close friends.`,
    origins: ['Japanese'],
  },
  {
    name: 'Ongyo-Ki',
    history: 'An oni that was controlled by Fujiwara no Chikata. Ongyo-ki suppressed its aura to prevent enemies from sensing him, allowing him to surprise enemies when he attacked. It has been allegedly said that this is the origin of ninjitsu.',
    origins: ['Japanese'],
  },
  {
    name: 'Oni',
    history: 'Oni (鬼) are creatures from Japanese folklore, variously translated as demons, devils, Ogres or Trolls. They are popular characters in Japanese art, literature and theater. Oni are known for attacking villages and plundering food, riches and women.',
    origins: ['Japanese'],
  },
  {
    name: 'Onmoraki',
    history: `In Shinto mythology, an Onmoraki is a bird-demon created from the spirits of freshly-dead corpses. They resemble a black crane, and if a person is caught sleeping in a temple's sermon hall, the Onmoraki will rebuke them while flapping its wings. Onmoraki are also said to shout the Degeneration Sutra in the household altar of priests who neglect to read their sutras.

    In modern Japanese art, the Onmoraki will often take on the comical appearance of a roasted chicken. This is most likely due to the works of a eighteenth century artist, Toriyama Sekien.`,
    origins: ['Japanese'],
  },
  {
    name: 'Orichalcum',
    history: `Orichalcum is a yellow metal, prized in ancient times, and mentioned in stories like Atlantis; it may have been a noble metal such as platinum, as it was supposed to be mined, or one type of bronze or brass or possibly some other, similar metal alloy.

    In 2015, metal ingots were found in an ancient shipwreck in Gela (Sicily), which were made of an alloy primarily consisting of copper, zinc and small percentages of nickel, lead and iron.`,
    origins: ['Ancient Greco-Roman artifact'],
  },
  {
    name: 'Orlov',
    history: 'The Orlov is an Indian diamond which has never been officially weighed but estimated to be around 190 carats. It sets in the scepter named after the Russian Count, Grigory Grigorievich Orlov, by Empress Catherine the Great.',
    origins: ['Slavic artifact'],
  },
  {
    name: 'Orobas',
    history: `According to the Lesser Key of Solomon, Orobas is the 55th demonic spirit and a powerful great prince of Hell who could give conjurers perfect information about the past, present or future, bestow honors, reconcile them with foes and protect them from being tempted by demons. He would never deceive anyone. He commands 20 legions of spirits (26 according to Harley 6483, considered the least reliable of the manuscripts). He supposedly also gives true answers of divinity and the creation of the world.

    Orobas is faithful to the conjurer, does not permit that any spirit tempts him, and never deceives anyone. He is depicted as a horse that changes into a man under the conjurer's request.
    
    The name could come from Latin "orobias," a type of incense.`,
    origins: ['Ars Goetia'],
  },
  {
    name: 'Orthrus',
    history: 'In Greek mythology, Orthrus was a two-headed dog and one of the many monsters sired by Typhon and Echidna. Among his siblings were Cerberus, Sphinx and Chimera to name but a few. Orthrus was the dog of the Titan Geryon, and along with Eurytion, was the guardian of Geryon\'s herd of red cattle. Geryon, Eurytion and Orthrus were all slain when Heracles was completing the tenth of his twelve labors.',
    origins: ['Greco-Roman'],
  },
  {
    name: 'Ose',
    history: `Ose, also known as Osé, Oze, Oso or Voso, is the 57th demonic spirit of the Ars Goetia and a great president of Hell. He first appears as a leopard, but after some time will take the form of a man. He gives skill in all liberal sciences and true answers concerning divine and secret things. He can change any men into any shape the exorcist may desire, and the one that is changed will not know it.

    He can also put them in a state of insanity in which the victim will believe that their identity has changed. The delusion, however, will only last for an hour. Ose governs over 30 legions of spirits.
    
    His name seems to derive from Latin 'os', mouth, language, or 'osor', that who abhors.`,
    origins: ['Ars Goetia'],
  },
  {
    name: 'Pale Rider',
    history: `The Pale Rider is the fourth and final Horseman of the Apocalypse, according to Christian scripture. The rider traditionally represents death. Despite typically being portrayed carrying a scythe as his weapon (much like the Grim Reaper), in the Book Of Revelation, he is described as bringing Hades (Hell) wherever he rides as his symbol. His color being pale, as opposed to an actual color, could be reflecting the sickly appearance of a corpse (though old translations could be interpreted as the rider being pale green and yellowish green.)

    "When the Lamb broke the fourth seal, I heard the voice of the fourth living creature saying, “Come.” I looked, and behold, an ashen horse; and he who sat on it had the name Death; and Hades was following with him. Authority was given to them over a fourth of the earth, to kill with sword and with famine and with pestilence and by the wild beasts of the earth." —&mdash;Revelation 6:7-8
    `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Parvati',
    history: `Parvati is the Hindu goddess of fertility, love, beauty, harmony, marriage, children, and devotion; as well as of divine strength and power. This beautiful goddess is also the second consort of Shiva in the Hindu mythology. A mountain princess, she is the reincarnation of the goddess Sati (Shiva's first consort), and won Shiva's love in her previous life despite his asceticism, but immolated herself after her father's disapproval. Reborn as Parvati, daughter of the snow mountain god Himalayas, she sought Shiva out. Because the gods required Shiva's offspring to defeat their fierce adversaries, they sacrificed Kama in order to stoke Shiva's suppressed desire for a female partner. The two reunited eventually and together gave birth to Kartikeya and later on Ganesha. They have the ability to merge into the half-male, half-female Ardha.

    The goddess Durga considered the fiercer, demon-fighting aspect of Parvati while Kali is considered by Hindus to be an aspect of Durga.`,
    origins: ['Hindu'],
  },
  {
    name: 'Pazuzu',
    history: 'Pazuzu is the Mesopotamian god of the southwest wind known for bringing famine during dry seasons, and locusts during rainy seasons. Recent research suggests Pazuzu may have been associated with a cold, northeasterly wind. Pazuzu was said to be invoked in amulets which combat the powers of the malicious goddess, and hated rival, Lamashtu, who was believed to cause harm to mother and child during childbirth. Although Pazuzu is said to be an evil spirit himself, he drives away other evil spirits, thus protecting humans against plagues and misfortunes.',
    origins: ['Mesopotamia'],
  },
  {
    name: 'Phoenix',
    history: `The phoenix is a mythical sacred fire bird which originated in the sub-continent of India in ancient mythologies mentioned in the Egyptian and later the Phoenician and the Greek Mythology.

    A phoenix is a mythical bird with a tail of beautiful gold and red plumage. It has a 500 to 1,000 year life-cycle, near the end of which it builds itself a nest of twigs that it then ignites; both nest and bird burn fiercely and are reduced to ashes, from which a new, young phoenix or phoenix egg arises, reborn anew to live again. The new phoenix is destined to live as long as its old self. In some stories, the new phoenix embalms the ashes of its old self in an egg made of myrrh and deposits it in the Egyptian city of Heliopolis. The bird was also said to regenerate when hurt or wounded by a foe, thus being almost immortal and invincible — it is also said that it can heal a person with a tear from its eyes and make them temporarily immune to death. The phoenix is a symbol of fire, divinity, resurrection and rebirth out of the ashes or chaos.
    
    In some official English translations of Chinese material, the Chinese Feng Huang and Zhu Que are sometimes incorrectly named "Phoenix."`,
    origins: ['Chinese', 'Hindu', 'Persian', 'Arabian', 'European', 'Greco-Roman'],
  },
  {
    name: 'Pisaca',
    history: `Pisacas are demonic creatures that feast on human meat, especially corpses. They are mentioned to be on the same level as other abominations, such as Rakshasa, and are considered to be the physical incarnation of ignus fatuus. The origin of their names is believed to have been a result of the demonization of Hindu tribes by Aryan people.

    They like darkness and haunt cremation grounds along with other demons like Bhutas (meaning ghosts) and Vetalas. Pisacas have the power to assume different forms at will and may also become invisible. Sometimes, they possess human beings, and the victims are afflicted with a variety of maladies and abnormalities like insanity. Certain mantras are supposed to cure such afflicted persons, and drive away the Pisaca which may be possessing that particular human being. In order to keep the Pisacas away, they are given their share of offerings during certain religious functions and festivals.`,
    origins: ['Hindu'],
  },
  {
    name: 'Pixie',
    history: `According to the local folklore of southwest England, pixies are small mischievous creatures that inhabit the countryside and woodlands that like to play pranks on humans. Depending on the tale told, pixies can vary in size from tiny enough to fit in the palm of a human's hand to the size of a small child, although they are always a good deal below the size of an average human. They can be portrayed with or without wings, and over the years have taken on many traits usually associated with fairies, often leading to the common misconception that they are one and the same.

    Pixies are sometimes said to be born in much the same way as humans, however some tales tell that they are humans transformed through misdeeds or magic. They play pranks on humans such as stealing their belongings, throwing things or calling out their names. They may also steal horses during the night and return them by the morning with tangled manes. While pixies usually don't cause any real harm, it is said that if someone follows the voices of pixies, they will never return.`,
    origins: ['English'],
  },
  {
    name: 'Power',
    history: 'Powers are the sixth of the nine orders of angels, also said to be called Authorities. It is said that they were the first order to be created. The Powers are the bearers of conscience and the keepers of history. They are academically driven and are concerned with ideology, philosophy, theology, religion and documents pertaining to those studies. Powers are the brain trusts; a group of experts who serve as advisers and policy planners. They are also the warrior angels created to be completely loyal to God. Some believe that no Power has ever fallen from grace, but another theory states that Satan was the Chief of the Powers before he fell (see also Ephesians 6:12). Their duty is to oversee the distribution of power among humankind, hence their name.',
    origins: ['Abrahamic'],
  },
  {
    name: 'Principality',
    history: `A Principality (Principalities for multiple) is an angel of the Third Sphere in Christian angelology, their duty also is said to be to carry out the orders given to them by the Dominions and bequeath blessings to the material world. Their task is to oversee groups of people. As beings related to the world of the germinal ideas, they are said to inspire living things to many things such as art or science.

    In the Kabbalah, they inhabit the sephirah Netzach and rule over love and beauty, with Haniel being their leader.`,
    origins: ['Abrahamic'],
  },
  {
    name: 'Queen Mab',
    history: `Mab, also known as Medb or Meive, is the queen of Connacht. Famous for her capricious nature and her many lovers, she wages many wars for the sake of her continued glory. The Cattle Raid of Cooley makes her cross paths with her archenemy Cu Chulainn, who shamed her numerous times by slaying her pets, warriors and handmaidens.

    Queen Mab is said to be the queen of the Unseelie Court and the dark counterpart of the fairy queen Titania. She was first referred as a fairy in William Shakespeare's play Romeo and Juliet, where "she is the fairies' midwife." Later, she appears in other poetry and literature, and in various guises in drama and cinema. In the play, her activity is described in a famous speech by Mercutio written originally in prose and often adapted into iambic pentameter, in which she is described as a miniature creature who performs midnight pranks upon sleepers. Being driven by a team of atomies, she rides her chariot over their noses and "delivers the fancies of sleeping men." She is also described as a midwife to help sleepers "give birth" to their dreams.
    
    She was immortalized in Mercutio's legendary monologue of "Romeo And Juliet" (Act I, Scene 4), which is often called the "Queen Mab Speech," which included:
    
    And in this state she gallops night by night
    Through lovers' brains, and then they dream of love
    O'er courtiers' knees, that dream on court'sies straight
    O'er lawyers' fingers, who straight dream on fees
    O'er ladies' lips, who straight on kisses dream
    Which oft the angry Mab with blisters plagues...`,
    origins: ['Celtic', 'English', 'European', 'Modern Fiction'],
  },
  {
    name: 'Queen\'s Necklace',
    history: `Queen's Necklace originates from the infamous affair of the Diamond Necklace, which tarnished Queen Marie Antoinette's reputation, leading to the French Revolution and the queen's subsequent execution.

    The very same object was a target in one of Arsène Lupin's tales, The Queen's Necklace (Le Collier de la reine).`,
    origins: ['European Mythology'],
  },
  {
    name: 'Quetzalcoatl',
    history: 'Quetzalcoatl is an Aztec sky and creator god along with representing the Sun, the element air, wind, and learning. The name is a combination of quetzal, a brightly colored Mesoamerican bird, and coatl, meaning serpent. The name was also taken on by various ancient leaders. Due to their cyclical view of time and the tendency of leaders to revise histories to support their rule, many events and attributes attributed to Quetzalcoatl are exceedingly difficult to separate from the political leaders that took this name on themselves. Quetzalcoatl is often referred to as The Feathered Serpent, connected to the planet Venus and was also the patron god of the Aztec priesthood, of learning and knowledge. Today Quetzalcoatl is arguably the best known Aztec deity, and is often thought to have been the principal Aztec god. However, Quetzalcoatl is one of several important gods in the Aztec pantheon along with the gods Tlaloc, Tezcatlipoca and Huitzilopochtli.',
    origins: ['Aztec'],
  },
  {
    name: 'Raja Naga',
    history: `In Hindu mythology, there are many recorded kings of nagas and many stories involving them, they are known as Raja Naga (or Naga kings). Raja Naga also appear in Buddhist mythology, and their duties consist of leading the nagas and protecting and worshipping the Buddha, along with protecting other enlightened beings.
    `,
    origins: ['Hindu', 'Buddhist'],
  },
  {
    name: 'Rakshasa',
    history: `A rakshasa is a demon or unrighteous spirit in Hindu and Buddhist mythology. Rakshasas are also called cannibals.

    According to the Ramayana, rakshasas were created from Brahma's foot; other sources claim they are descended from Pulastya, or from Khasa, or from Nirriti and Nirrita. Legend has it that many rakshasas were particularly wicked humans in previous incarnations. Rakshasas are notorious for disturbing sacrifices, desecrating graves, harassing priests, possessing human beings and so on. Their fingernails are venomous, and they feed on human flesh and spoiled food. They are shapeshifters, illusionists and magicians. Ravana is said to be the king of rakshasas.
    
    In Japan, the rakshasa is known as Rasetsu, and in Shingon is identified as the lord of demons (Rasetsuten) and guardian of the southwest. It is depicted as horse-headed. Taraka is said to be a Rakshasa.`,
    origins: ['Hindu', 'Buddhist'],
  },
  {
    name: 'Rangda',
    history: `Rangda is the demon queen of the leyaks in Bali, according to traditional Balinese mythology. Terrifying to behold, the child-eating Rangda leads an army of evil witches against the leader of the forces of good, Barong.

    It is suggested that Rangda may be derived from the 11th century Javan queen Mahendradatta who was exiled by the king, Dharmodayana, for allegedly practicing witchcraft. The tale surrounding this is that she proceeded to take her revenge by killing off half the kingdom, which by then belonged to her and Dharmodayana's son Erlangga, with plague before being overcome by a holy man. The name Rangda itself means "widow" in old Javanese and Balinese language. It may also be associated with the legend of a demon queen named Calon Arang, who wreaked havoc in late 10th century Java, during the reign of Airlangga.
    
    Rangda is important in Balinese culture, and performances depicting her struggles with Barong or with Airlangga in that tale are popular tourist attractions as well as tradition. She is depicted as a mostly nude old woman, with long and unkempt hair, pendulous breasts and claws. Her face is traditionally a horrifying fanged and goggle-eyed mask, with a long, protruding tongue.
    
    It has been suggested that Rangda may be closely associated with the Hindu warrior mother goddess Durga, or the black goddess of destruction Kali, given that Bali is a Hindu island. While Rangda is mainly seen as fearsome and a personification of evil, she is also seen as a protective figure in some parts of Bali. The colors associated with Rangda are red, black and white, and these colors are also associated with Kali, and her iconography is also similar to Kali. Mahendradatta, the queen Rangda might be based on, was known for her devotion to the cult of Durga in Bali.`,
    origins: ['Balinese'],
  },
  {
    name: 'Raphael',
    history: `Within the hierarchy of angels from Christian mythology, Raphael, or Raphaela is one of the four seraphim or archangels of God.

    His name means "It is God that heals." He is said to be the guardian of the Tree of Life, opposite the Tree of Knowledge in the Garden of Eden. He also expounds to Adam the War in Heaven in which Lucifer and the Fallen angels fell, and the creation of the Earth. Raphael first appears disguised in human form as the travelling companion of Tobit's son Tobiah, calling himself "Azarias the son of the great Ananias".
    
    Most of Raphael's exploits take place in the Apocrypha, where he has roles as imprisoner of Azazel (an Angel that gets exiled from Heaven for having sex with human females and one of the Grigori) and guide of Sheol, the Hebrew underworld. Although Raphael is not named in the Bible, theologians believe he was the archangel who healed the infirm at the Bethesda pond described in the Gospels. He is also thought to be one of the three angels who visited the patriarch Abraham and his wife, Sarah, to help with their conception; as well as the angel who healed Abraham’s grandson Jacob’s wrestling injuries and who gave King Solomon his magical ring.
    
    Though he is not depicted as a lover of another being, Raphael appears in The Lovers Tarot Card, and his status of the patron Saint of lovers due to his involvement of uniting Sarah & Tobias in the Book of Tobit. Raphael is also portrayed in religious art as carrying a stick or cane and walking, often leading a lost child or traveler back to the right direction, symbolizing Raphael's role as patron saint of travelers and exemplary guardian angel. Saint Raphael is also accounted as a patron of the blind, happy meetings, nurses, physicians, medical workers, matchmakers, Christian marriage, and Catholic studies.
    
    Raphael is the angel responsible for signaling the coming of Judgment Day by blowing the trumpet (namely Sûr) and sending out a "Blast of Truth". According to tradition, the trumpet will be blown two times. According to some sources, the demon lord Asmodeus is his counterpart and they have a longstanding feud with each other. Not all branches of these religions consider the identification of Raphael to be canonical.
    `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Red Rider',
    history: `The second of the Four Horsemen of the Apocalypse, named War. He represents war, and his horse is colored "fiery" red. He holds a great sword upwards as though ready to battle or mass slaughter. The sword is meant to suggest that blood will be spilled. The great sword being held upwards can also be viewed as a declaration of war, as typically, crossed swords held upward in heraldry signify entering in battle. He takes peace from the Earth and allows men to kill one another.

    "When He broke the second seal, I heard the second living creature saying, “Come.” And another, a red horse, went out; and to him who sat on it, it was granted to take peace from the earth, and that men would slay one another; and a great sword was given to him."
    
    —&mdash;Revelation 6:3-4
    `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Regent',
    history: 'Regent is based on the Regent Diamond, a 141 carat diamond originating from India. It was named as such when it was purchased by Regent Philippe II, Duke of Orléans.',
    origins: ['European'],
  },
  {
    name: 'Saki Mitama',
    history: 'In Japanese belief, Saki Mitama is a part of the soul that brings good fortune and blessings. It is said to bring prosperity in hunting, fishing and harvests, however some believe this is actually the purpose of Nigi Mitama.',
    origins: ['Japanese'],
  },
  {
    name: 'Sandalphon',
    history: `Sandalphon is an archangel or seraphim that is prominently featured in Jewish mysticism, such as the Kabbalah where he resides in the Sephirot of Malkuth alongside his "twin brother" Metatron. Sandalphon is said to be responsible for determining the gender of a person in one's embryonic state, and in other accounts said to be a guardian angel who delivers prayers to God.
    `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Sandman',
    history: `Originating from Northern European lore (specifically rural Germany), the Sandman is a faerie is rumored to put people to sleep by sprinkling magical sand onto the eyes of children while they sleep at night. The rheum in one's eyes upon waking is believed to be the result of the Sandman's work the previous evening.

    If a victim resisted, he would sit on their eyelids to force them to sleep. For bad children who still wouldn't sleep, he would scoop their eyes out.`,
    origins: ['European', 'German'],
  },
  {
    name: 'Sarasvati',
    history: 'Hindus believe that Sarasvati is the goddess of knowledge, music and the arts. Sarasvati, also known as Saraswati, has been identified with the Vedic Sarasvati River. She is considered as consort of Brahma, the Hindu god of creation. Thus, with the goddesses Lakshmi and Parvati or Durga, she forms the Tridevi, who are consorts of the male trinity of Brahma, Vishnu and Shiva, respectively. Sarasvati\'s children are the Vedas, which are the oldest sacred texts of Hinduism. She is known in East Asia as Benzaiten or Biancaitian (弁財天, Benzaiten)?, one of the Seven Lucky Gods.',
    origins: ['Hindu'],
  },
  {
    name: 'Satan',
    history: `Satan is a prominent figure in the Abrahamic religions, playing various roles in their literature. The Old Testament and Judaism describes Satan as an accuser who tempts mankind to commit sin to show God how mankind can easily be led astray from him. In the Book of Job and the Kabbalah in particular, Satan is even able to take control of the life of a person in the stead of God, though only to the extent which God allows.

    In contrast, the New Testament depicts Satan as a rebel and an opposer to the will of God. In the Gospels, he is shown trying to tempt Christ away from the role of messiah, and Jesus denounced Satan as the father of lies. The Book of Revelation later names Satan as the devil leading an army of angels into a war with Michael and the rest of heaven. 
    
    Regardless of which interpretation is the case, Satan often appears to those who are sinful, playing into their hearts and towing them into despair and further sin. In Islam, he is regarded as an instrument of God's wrath, and several classifications of demons also associate Satan with Wrath of the seven deadly sins.
    
    In modern Christianity and literature with Abrahamic influence, Satan is typically considered one of the many names or titles referring to the devil in Christianity, who rallied other angels against the authority of God, after which they fought against the forces of God, were utterly defeated and then cast down into hell, becoming demons. Megami Tensei does not depict Satan as the devil (the role goes to Lucifer in Megami Tensei), instead based on Satan's appearance in the Book of Job.
    
    Throughout history, Satan's figure has been linked with other dark entities from mythology, such as Seth, Hades, Ahriman and Mara, while some other religious currents such as Gnosticism portray him as the evil deity Yaldabaoth. In the Talmud, he is often equated with the angel of death Samael, and in the Book of Jubilee, he is either the same entity as, or at least very similar to, Mastema.
    `,
    origins: ['Abrahamic'],
  },
  {
    name: 'Satanael',
    history: `In the second Book of Enoch, Satanael, also known as Sataniel or Satanail, is mentioned as an archangel that lead the fallen angels that rebelled against God, by refusing to bow to the human Enoch, leading to his imprisonment. Due to his name and role, he is considered an interpretation of Lucifer.

    In some Gnostic traditions, Satanael is said to be an angel that once served Yaldabaoth. He rebelled when he realized that Yaldabaoth was not the true God and granted humanity the knowledge to liberate themselves from Yaldabaoth. In other traditions, he is said to have created the material universe as a second heaven to rule over and became the God of the Old Testament, making him an interpretation of the Yaldabaoth.
    
    According to the beliefs of the Cathars, a notorious medieval heretical creed, Satanael (or Satanel) was the angelic name of Satan before Michael the archangel removed the -el suffix (signifying the loss of his angelic nature) and sealed him in Hell. In this interpretation, Satanael is the radical opposite of God and the ruler of the material world.`,
    origins: ['Abrahamic', 'Gnostic'],
  },
  {
    name: 'Scathach',
    history: `Scathach ("Shadowy") also known as 'The Shadowy One', is a legendary figure in the Ulster Cycle of Irish mythology. She is a legendary Scottish warrior woman and martial arts teacher who trains the legendary Ulster hero Cu Chulainn in the arts of combat. Texts describe her homeland as "Alpi," which commentators associate with Alba, the Gaelic name of Scotland; she is especially associated with the Isle of Skye, where her residence Dún Scáith (Fort of Shadows) stands.

    Scathach's instruction of Cu Chulainn appears in Tochmarc Emire (The Wooing of Emer), a foretale to the great epic "Táin Bó Cúailnge." Cu Chulainn and Emer fall in love, but her father Forgall forbade the union until Cu Chulainn has completed his warrior training. Cu Chulainn and his friend Ferdiad travel to Dún Scáith, where Scathach teaches them feats of arms, and gives Cu Chulainn his deadly spear, the Gáe Bulg.
    
    Cu Chulainn begins an affair with Scathach's daughter Uathach, but accidentally breaks her fingers. She screams, calling her lover Cochar Croibhe to the room. Despite Uathach's protests, he challenges Cu Chulainn to a duel; Cu Chulainn dispatches him easily.
    
    To make it up to Uathach and Scathach, Cu Chulainn assumes Cochar's duties, and becomes Uathach's lover. Scathach eventually promises her daughter to him, without requiring the traditional bride price. Scathach also grants Cu Chulainn the "friendship of her thighs" (they have sex) when his training is almost complete. When her rival, the warrior woman Aífe (also assumed to be Scathach's twin sister), threatens her territory, Cu Chulainn defeats her in battle and forces her to make peace. Aífe also sleeps with Cu Chulainn, producing his son Connla, who Cu Chulainn kills years later without realizing he is his son.
    `,
    origins: ['Irish', 'Scottish', 'Celtic'],
  },
  {
    name: 'Seiryu',
    history: `The Azure Dragon is one of the Four Symbols (四象) of Chinese constellations along with Vermillion Bird, White Tiger and Black Tortoise . It represents the East, spring, the color azure (green/blue) and the Wood Element. In Japan, it is one of the four guardian spirits of cities and protects Kyoto.

    In some official English versions this demon is incorrectly translated as Long due to confusion between Four Symbols (Si Xiang) and four benevolent animals (Si Ling or Ssu-Ling) of China. In the original Japanese version, Seiryu or Qing Long represents one of the Four Symbols and Ryu or Long belongs to four benevolent animals which are fundamentally different.`,
    origins: ['Japanese', 'Chinese', 'Korean'],
  },
  {
    name: 'Setanta',
    history: 'Setanta is Cu Chulainn\'s given name. He obtained his more famous name when he killed Culann\'s guard dog in self-defense and volunteered to take its place ("Cu Chulainn" means "Culann\'s Hound").',
    origins: ['Celtic'],
  },
  {
    name: 'Seth',
    history: 'Set, also spelled Seth, Sutekh or Sūtaḫ, is a deity from Egyptian mythology. Set is the deity of deserts, storms and chaos and served as one of the greatest deities in Egyptian myth. Set was married to the goddess Nephthys, who was also his sister. He killed and dismembered his brother Osiris out of jealousy. Isis, Osiris\' wife and sister, reassembled him and Osiris became the ruler of the dead. Isis gave birth to Osiris\'s child, Horus, who became an enemy of Set. In earlier myths, Set fought Apep each night as Ra journeyed through the underworld. Set had been demonized to some extent, and the Greeks interpreted him to be a force of evil, which may be one of the reasons he is viewed as an antagonistic force in later depictions.',
    origins: ['Egyptian'],
  },
  {
    name: 'Shiisaa',
    history: `Shiisaa is a shishi-like creature said to be a protective spirit or guardian deity in Okinawan mythology. Shiisa are holy beasts that possess the power to repel demons and exorcise evil spirits that cause fires. A legendary creature said to repel disasters and misfortune and bring good luck to villages. Shiisa resemble a cross between a lion and a dog. Their form is thought to be derived from the lions of the ancient Orient.

    Shiisa statues can be found in a variety of places, such as on the roofs of houses and outside temples. The statues are placed so that they face northeast (toward the Demon gate), south (to guard against fire), or the direction of a gate or cross-street. Paired figurines of them are often set at entrances to houses. In Okinawa, souls of the deceased become balls of fire and will burn houses, but Shiisaa keeps such spirits out.
    
    There are many stories about it in Ryukyu lore. They are the local version of the Chinese shishi.`,
    origins: ['Japanese', 'Chinese'],
  },
  {
    name: 'Shiki-Ouji',
    history: 'The Shikiouji (or Shiki-Ouji) is an exceptionally powerful type of Shikigami that could only be summoned as a servant by the most elite of those that practiced the mystical arts of Yin and Yang. It could be used to scare away demons that cause sickness and to ward off disasters to its master. The Shikiouji\'s basic nature is said to be very close to that of an Oni and is thus very ferocious, making it very dangerous for average mystics to attempt to summon it.',
    origins: ['Japanese'],
  },
  {
    name: 'Shiva',
    history: `In the Hindu religion, Shiva the Destroyer is one of the three principal deities of the Trimurti (Hindu Male Triad) along with Brahma the Creator and Vishnu the Preserver. He originally evolved from the early Vedic god, Rudra, and is now the supreme deity within Shaivism, a branch of Hinduism that focuses on the worship of Shiva. While he is known as the destroyer, he is also considered to be a benevolent and beneficial force, as without destruction, new creation couldn't take place. He also acts against premature destruction, going far enough to withstand great suffering. He is depicted with up to four arms, a third eye, a blue throat, matted hair, carrying a trident and a drum, is often accompanied by a serpent and rides on the back of the sacred bull Nandi.

    The first of Shiva's best known attributes is his third eye, which he once used to burn the god of love, Kamadeva, to ashes. The effulgence from this act was so hot that not even the god of fire, Agni, could handle it, and was used to create the war god Kartikeya. Shiva also has a blue throat that was caused when he swallowed the most deadly poison in the world, Halahala, the poison of the primordial snake Vasuki, earning him the name Vishakantha (one who held poison in his throat). This act is further proof of his benevolent and self-sacrificing nature.
    
    He is the husband of the goddess Parvati, or Shakti, in all her incarnations and has two sons, Ganesha and Skanda. He also has many incarnations that would go on to become sacred figures in their own right such as Shankara and Hanuman. Shiva is also worshiped in forms born from the fusion of himself and other gods, such as Harihara when fused with Vishnu or Ardhanarishvara when he's fused Parvati or Shakti.
    
    Followers of a religion called Shaktism believe the Shiva is an aspect or reflection of the Divine Mother, or Shakti.
    
    Another name for Shiva is Mahakala, who, in Buddhism, is a fierce protector deity who is equivalent to Shiva.`,
    origins: ['Hindu'],
  },
  {
    name: 'Siegfried',
    history: `Siegfried is the dragon-slaying hero of the medieval German epic Das Nibelungenlied, most widely known due to its adaptation by Richard Wagner into a series of four operas, Der Ring des Nibelungen. The character of Siegfried and much of the plot of the medieval German epic originate from earlier Norse sagas, where the character is known as Sigurd.

    Sigurd was requested to slay Fafnir by Regin, his foster parent and guardian. Regin was the brother of Otr and Fafnir and son of Hreidmar. Otr was killed by the Aesir after they mistook him for an otter, and as compensation had his body stuffed with gold. Fafnir then killed Hreidmar and stole the "Otr's Gold," and to better guard it, turned himself into a dragon.
    
    Sigurd met Odin on his way, who advised the hero to dig trenches to drain the dragon's blood, which apparently gave him invulnerability. He killed Fafnir when the dragon walked over the trench, and bathed himself in the blood. However, a leaf had fallen and stuck itself on his shoulder. When he drank some of the blood, he understood the language of the birds and learned that Regin was plotting his death. As retaliation, he killed Regin first. Despite gaining the gold, however, it brought him no happiness.`,
    origins: ['Norse'],
  },
  {
    name: 'Silky',
    history: 'According to the book The Fairy Bible: The Definitive Guide to the World of Fairies written by Teresa Moorey, the Silky is a female fairy from the borders of Scotland, known to "wear rustling silk as she does household chores" and "terrorizes lazy servants."',
    origins: ['Scottish', 'Irish'],
  },
  {
    name: 'Skadi',
    history: 'Skadi (Norse: Skaði), alternatively referred as Öndurguð or Öndurdís (lit: Snowshoe goddess) is a jötunn, a giantess in Norse mythology. Associated with skiing, the hunt and winter, she is the daughter of Thjazi, one-time wife of the god Njörður, and stepmother of Freyr and Freya.',
    origins: ['Norse'],
  },
  {
    name: 'Slime',
    history: `A slime, also commonly called ooze, are common types of monsters in many fantasy role-play games. True to their name, they don't usually have any distinct shape and appear as large masses of gelatinous fluid. Slimes and oozes vary between mediums, with some being intelligent and capable of assuming basic shapes with others being nothing more than brainless piles of goo that dissolve whatever matter becomes enveloped by their bodies.

    Like oozes, many slimes dwell underground, and most secrete an acid from their skin that dissolves flesh and other materials rapidly. In D&D, slimes are essentially blind, but more than make up for that with an ability called "blindsight," which allows them to discern nearby objects and creatures without needing to see them visually.`,
    origins: ['American', 'Pop-culture'],
  },
  {
    name: 'Sraosha',
    history: '',
    origins: [],
  },
  {
    name: 'Stone of Scone',
    history: '',
    origins: [],
  },
  {
    name: 'Succubus',
    history: '',
    origins: [],
  },
  {
    name: 'Sudama',
    history: '',
    origins: [],
  },
  {
    name: 'Sui-Ki',
    history: '',
    origins: [],
  },
  {
    name: 'Surt',
    history: '',
    origins: [],
  },
  {
    name: 'Suzaku',
    history: '',
    origins: [],
  },
  {
    name: 'Take-Minakata',
    history: '',
    origins: [],
  },
  {
    name: 'Tam Lin',
    history: '',
    origins: [],
  },
  {
    name: 'Thor',
    history: `Thor (Old Norse: Þórr), also known as Thor Odinson, is the red-haired son of Odin & Jord and is the Norse god of lighting, thunder, storms, sacred groves and trees in Germanic mythology and Germanic paganism. His belt Mejingjard doubles his strength and lightning flashes every time he throws his trusty hammer, Mjölnir.

    Most surviving stories relating to Germanic mythology either mention Thor or center on Thor's exploits. Thor was a much revered god of the ancient Germanic people from at least the earliest surviving written accounts of the indigenous Germanic tribes to over a thousand years later in the late Viking Age.
    
    Thor was appealed to for protection on numerous objects found from various Germanic tribes. Miniature replicas of Mjölnir, the weapon of Thor, became a defiant symbol of Norse paganism during the Christianization of Scandinavia.`,
    origins: ['Norse'],
  },
  {
    name: 'Thoth',
    history: `Thoth, also known Djehuti, is one of the most important gods in Egyptian mythology, commonly depicted as a man with the head of an ibis or baboon. He was said to be self-created or born of the seed of Horus from the forehead of Set. Although according to one story, Thoth was born "from the lips of Ra" at the beginning of creation and was known as the "god without a mother". In another tale, Thoth is self-created at the beginning of time and, as an ibis, lays the cosmic egg which holds all of creation.

    Most depictions show them holding a was or rod and an ankh. Thoth's role was maintaining the universe and later associated with settling disputes between gods, the moon, wisdom, magic, science and writing as well as measuring time. He also the god of equilibrium and balance and associated closely with both the principle of divine balance and the goddess Ma'at who personified this principle. Another of his consorts was the goddess Nehemetawy ('She Who Embraces Those In Need") a protector goddess.
    
    He stands opposite Set, the god of chaos and storms, and sides with Osiris and Isis, the gods of the underworld and motherhood respectively. He gave Isis the power to resurrect Osiris after he was killed by the god Set.
    `,
    origins: ['Egyptian'],
  },
  {
    name: 'Throne',
    history: 'Thrones are the third of nine classes of angels in Christianity, they are known as the angels of knowledge. The Thrones or Elders, also known as the Erelim, Galgal, or Ophanim, are a class of celestial beings mentioned by Paul of Tarsus in Colossians 1:16 (New Testament) and related to the throne of God. They are living symbols of God\'s justice and authority. They come the closest of all angels to spiritual perfection and emanate the light of God with mirror-like goodness. They, despite their greatness, are intensely humble, an attribute that allows them to dispense justice with perfect objectivity and without fear of pride or ambition. Because they are living symbols of God\'s justice and authority, they are called Thrones and have as one of their symbols the throne. In contrast to their appearance, Ezekiel 1:15 describes Thrones as eye covered wheels, rather than humanoids.',
    origins: ['Abrahamic'],
  },
  {
    name: 'Thunderbird',
    history: 'The Thunderbird is a legendary creature found in Native American folklore. It\'s considered a "supernatural" bird of power and strength. It is especially important, and richly depicted, in the art, songs and oral histories of many Pacific Northwest Coast cultures, and is found in various forms among the peoples of the American Southwest and Great Plains. Thunderbirds were major components of the Southeastern Ceremonial Complex of American prehistory. The Thunderbird\'s name comes from the common belief that the beating of its enormous wings causes thunder and stirs the wind.',
    origins: ['American', 'Pop-culture'],
  },
  {
    name: 'Titania',
    history: 'Titania is derived from the fairy queen character in William Shakespeare\'s play "A Midsummer Night\'s Dream," which in traditional folklore had no name. While considered beautiful and delicate, Shakespeare portrays her in the play as a very proud fairy, with powers that easily match those of her husband, Oberon. Due to the massive success of the play and its status as a classic, Titania is used to name the fairy queen in many other works of fiction.',
    origins: ['English', 'European', 'Modern Fiction'],
  },
  {
    name: 'Trumpeter',
    history: '',
    origins: [],
  },
  {
    name: 'Unicorn',
    history: '',
    origins: [],
  },
  {
    name: 'Uriel',
    history: '',
    origins: [],
  },
  {
    name: 'Valkyrie',
    history: '',
    origins: [],
  },
  {
    name: 'Vasuki',
    history: '',
    origins: [],
  },
  {
    name: 'Vishnu',
    history: '',
    origins: [],
  },
  {
    name: 'Vohu Manah',
    history: '',
    origins: [],
  },
  {
    name: 'White Rider',
    history: '',
    origins: [],
  },
  {
    name: 'Yaksini',
    history: '',
    origins: [],
  },
  {
    name: 'Yamata-no-Orochi',
    history: '',
    origins: [],
  },
  {
    name: 'Yatagarasu',
    history: '',
    origins: [],
  },
  {
    name: 'Yoshitsune',
    history: '',
    origins: [],
  },
  {
    name: 'Yurlungur',
    history: '',
    origins: [],
  },
  {
    name: 'Zaou-Gongen',
    history: '',
    origins: [],
  },
  {
    name: 'Zouchouten',
    history: '',
    origins: [],
  },
  {
    name: 'Ariadne',
    history: '',
    origins: [],
  },
  {
    name: 'Ariadne Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Asterius',
    history: '',
    origins: [],
  },
  {
    name: 'Asterius Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Athena',
    history: '',
    origins: [],
  },
  {
    name: 'Athena Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Izanagi',
    history: '',
    origins: [],
  },
  {
    name: 'Izanagi Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Izanagi-no-Okami',
    history: '',
    origins: [],
  },
  {
    name: 'Izanagi-no-Okami Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Kaguya',
    history: '',
    origins: [],
  },
  {
    name: 'Kaguya Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Magatsu-Izanagi',
    history: '',
    origins: [],
  },
  {
    name: 'Magatsu-Izanagi Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Messiah',
    history: '',
    origins: [],
  },
  {
    name: 'Messiah Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Orpheus',
    history: '',
    origins: [],
  },
  {
    name: 'Orpheus F',
    history: '',
    origins: [],
  },
  {
    name: 'Orpheus F Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Orpheus Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Raoul',
    history: '',
    origins: [],
  },
  {
    name: 'Thanatos',
    history: '',
    origins: [],
  },
  {
    name: 'Thanatos Picaro',
    history: '',
    origins: [],
  },
  {
    name: 'Tsukiyomi',
    history: '',
    origins: [],
  },
  {
    name: 'Tsukiyomi Picaro',
    history: '',
    origins: [],
  },

];

export default myths;
