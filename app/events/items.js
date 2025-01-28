const offstage = [
    {
        title: "Essay Writing",
        description: "Competitions in Malayalam, English, and Hindi. Participants write essays on topics provided before the event. Max time: 1 hour.",
    },
    {
        title: "Versification",
        description: "Create poems in Malayalam, English, or Hindi. Topics are provided just before the event. Max time: 1 hour.",
    },
    {
        title: "Short Story Writing",
        description: "Write short stories in Malayalam, English, or Hindi. Topics are given on the spot. Max time: 1 hour.",
    },
    {
        title: "Painting",
        description: "Use water, oil, or poster colors. The theme is provided on the spot. Max time: 2 hours.",
    },
    {
        title: "Pencil Drawing",
        description: "Draw freehand. The theme will be announced at the event. Max time: 2 hours.",
    },
    {
        title: "Poster Making",
        description: "Create posters based on a theme provided on the spot. Max time: 2 hours.",
    },
    {
        title: "Cartoon",
        description: "Draw black and white cartoons based on the given theme. Max time: 30 minutes.",
    },
    {
        title: "Flower Arrangement",
        description: "Arrange flowers and plants creatively. All materials must be brought by participants. Max time: 30 minutes.",
    },
    {
        title: "Clay Modelling",
        description: "Participants create sculptures with clay provided at the event. Max time: 2.5 hours.",
    },
    {
        title: "Rangoli",
        description: "Use colored powders, flowers, or grains to create designs. Max space: 1x1m². Max time: 2.5 hours.",
    },
    {
        title: "Face Painting",
        description: "Participants paint designs on faces as their canvas. Max time: 2 hours.",
    },
    {
        title: "Mehandi",
        description: "Apply intricate henna designs up to the elbow. Only natural colors allowed. Max time: 2 hours.",
    },
    {
        title: "Fabric Painting",
        description: "Paint on fabric using an outline provided. Judged on creativity and color use. Max time: 2 hours.",
    },
    {
        title: "Collage",
        description: "Create a collage using various materials based on the given theme. Max time: 2 hours.",
    },
    {
        title: "Photography",
        description: "Take photos on the provided topic and submit both digital and printed versions. Max time: 24 hours.",
    },
    {
        title: "Handwriting",
        description: "Participants write in neat, legible English within the given time. Max time: 10 minutes.",
    },
    {
        title: "Caption Writing",
        description: "Write captions based on the given image or theme in Malayalam or English. Max time: 6 minutes.",
    },
    {
        title: "Script Writing",
        description: "Write a script in Malayalam based on a theme given at the event. Max time: 1 hour.",
    },
    {
        title: "Film Review",
        description: "Watch a film and write a review on the spot. Max time: 1 hour.",
    },
];

const onstage = [
    {
        title: "Light Music",
        description: "Sing solo Malayalam non-film songs. Judged on musicality, rhythm, and overall performance.",
    },
    {
        title: "Classical Music",
        description: "Solo performance of Carnatic classical songs. Judged on raga, swara, and composition.",
    },
    {
        title: "Western Vocal Solo",
        description: "Sing solo songs in English. Judged on composition, rhythm, and overall impression.",
    },
    {
        title: "Instrumental Music",
        description: "Solo performance on percussion, wind, or string instruments. Judged on rhythm and composition.",
    },
    {
        title: "Solo Dance (Folk)",
        description: "Perform solo folk dances to Malayalam non-film songs. Judged on rhythm and expression.",
    },
    {
        title: "Western Dance (Solo)",
        description: "Perform a solo dance to Western music. Judged on creativity and synchronization.",
    },
    {
        title: "Mock Press",
        description: "Impersonate a famous person and answer questions in a mock press conference.",
    },
    {
        title: "Extempore Speech",
        description: "Deliver an impromptu speech on a randomly picked topic. Judged on diction and coverage.",
    },
    {
        title: "Recitation",
        description: "Recite poems in Malayalam, English, Sanskrit, Arabic, or Hindi. Judged on delivery and expression.",
    },
    {
        title: "Fancy Dress",
        description: "Dress up and perform in costume. No dialogues allowed, only background music.",
    },
    {
        title: "Monoact",
        description: "Solo acting performance without dialogues. Judged on expression and creativity.",
    },
    {
        title: "Mimicry",
        description: "Imitate sounds, voices, or personalities. Judged on accuracy and humor.",
    },
    {
        title: "Classical Dance",
        description: "Perform classical Indian dances like Mohiniyattam, Bharatanatyam, or Kuchipudi.",
    },
    {
        title: "Adaptune",
        description: "Dance to songs that change tunes during the performance. Judged on adaptability.",
    },
    {
        title: "Mappilappattu",
        description: "Perform solo Kissa songs. Judged on melody, rhythm, and pronunciation.",
    },
    {
        title: "Elocution",
        description: "Deliver a speech on a prepared topic. Judged on subject coverage and language.",
    },
    {
        title: "Group Music",
        description: "Perform Eastern group songs. Judged on rhythm, harmony, and coordination.",
    },
    {
        title: "Western Group Song",
        description: "Sing group songs in English. Judged on musical arrangement and synchronization.",
    },
    {
        title: "Vattappattu",
        description: "Traditional group singing with rhythmic hand clapping.",
    },
    {
        title: "Ganamela",
        description: "Sing film songs with karaoke backing. Max of 3 songs allowed.",
    },
    {
        title: "Mime",
        description: "Group mime performance. Judged on creativity, expression, and coordination.",
    },
    {
        title: "Oppana & Thiruvathirakali",
        description: "Traditional Kerala group dance performances.",
    },
    {
        title: "Ad Zap",
        description: "Create a mock advertisement on a given topic. Judged on creativity and humor.",
    },
    {
        title: "Kathaprasangam",
        description: "Narrative storytelling performance with music. Judged on delivery and creativity.",
    },
    {
        title: "Quiz",
        description: "Team-based quiz competition. Judged on knowledge and quick responses.",
    },
    {
        title: "Duffmuttu",
        description: "Traditional group singing and drumming performance.",
    },
    {
        title: "Drama",
        description: "Perform a Malayalam stage drama. Judged on acting, stagecraft, and theme.",
    },
    {
        title: "Synchro Dance",
        description: "Two performers dance in sync to a film song. Judged on coordination and creativity.",
    },
    {
        title: "Nadanpattu",
        description: "Perform traditional folk songs. Judged on authenticity and presentation.",
    },
    {
        title: "Patriotic Song",
        description: "Group singing of patriotic songs. Judged on harmony and presentation.",
    },
    {
        title: "Vanchipattu",
        description: "Group singing of traditional boat songs. Judged on rhythm and coordination.",
    },
    {
        title: "Margamkali",
        description: "Traditional Christian group dance. Judged on formation and rhythm.",
    },
    {
        title: "Group Dance (Eastern)",
        description: "Perform Eastern group dances. Judged on rhythm, expression, and coordination.",
    },
    {
        title: "Debate",
        description: "Team debate on a given topic. Judged on arguments and delivery.",
    },
];

export { offstage, onstage };