const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi",
        category: "Motivation",
        rarity: "Uncommon"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "Confidence",
        rarity: "Uncommon"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "If you don’t know where you are going, any road will get you there.",
        author: "Lewis Carroll",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "I’d rather fail at something important than succeed at something trivial.",
        author: "Paul Hawken",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "In business, as in life, all that matters is that you do something positive.",
        author: "Sir Richard Branson",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "Our prime purpose in this life is to help others. And if you can’t help them, at least don’t hurt them.",
        author: "Dalai Lama",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "Find a happy person, and you will find a project.",
        author: "Sonja Lyubomirsky",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "One person with passion is better than 40 people merely interested.",
        author: "E.M. Forster",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "Choose a job you love, and you will never have to work a day in your life.",
        author: "Confucius",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "It’s hard to do a really good job on anything you don’t think about in the shower.",
        author: "Paul Graham",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "Your work is to discover your work, and then with all your heart, to give yourself to it.",
        author: "Buddha",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
        author: "Steve Jobs",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "If we don’t change, we don’t grow. If we don’t grow, we are not really living.",
        author: "Gail Sheehy",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "Don’t freak yourself out by what other people have. They don’t have what you’ve got.",
        author: "Simon Sinek",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "If you don’t stand for something, you’ll fall for anything.",
        author: "Chuck D",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "Set impossible challenges. Then catch up with them.",
        author: "Sir Richard Branson",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "A goal is a dream with a deadline.",
        author: "Napoleon Hill",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. Guess what they planned for you? Not much.",
        author: "Jim Rohn",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "When writing the story of your life, don’t let anyone else hold the pen.",
        author: "Harley Davidson",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "Success is liking yourself, liking what you do, and liking how you do it.",
        author: "Maya Angelou",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "If you don’t build your dream, someone else will hire you to help them build theirs.",
        author: "Dhirubhai Ambani",
        category: "Work",
        rarity: "Uncommon"
    },
    {
        text: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing it’s stupid.",
        author: "Albert Einstein",
        category: "Work",
        rarity: "Common"
    },
    {
        text: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill",
        category: "Motivation",
        rarity: "Uncommon"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
        category: "Motivation",
        rarity: "Uncommon"
    },
    {
        text: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Life isn't about getting and having, it's about giving and being.",
        author: "Kevin Kruse",
        category: "Motivation",
        rarity: "Uncommon"
    },
    {
        text: "We become what we think about.",
        author: "Earl Nightingale",
        category: "Motivation",
        rarity: "Uncommon"
    },
    {
        text: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll",
        category: "Motivation",
        rarity: "Uncommon"
    },
    {
        text: "The most common way people give up their power is by thinking they don’t have any.",
        author: "Alice Walker",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "An unexamined life is not worth living.",
        author: "Socrates",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Winning isn’t everything, but wanting to win is.",
        author: "Vince Lombardi",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Either you run the day, or the day runs you.",
        author: "Jim Rohn",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: " The best revenge is massive success.",
        author: "Frank Sinatra",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        author: "Jesus Christ",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "Start where you are. Use what you have.  Do what you can.",
        author: "Arthur Asle",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "Everything has beauty, but not everyone can see.",
        author: "Confucius",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Happiness is not something readymade.  It comes from your own actions.",
        author: "Dalai Lama",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        author: "Sheryl Sandberg",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "Too many of us are not living our dreams because we are living our fears.",
        author: "Les Brown",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "In order to succeed, your desire for success should be greater than your fear of failure.",
        author: "Bill Cosby",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "You become what you believe.",
        author: "Oprah Winfrey",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "I would rather die of passion than of boredom.",
        author: "Vincent van Gogh",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Education costs money.  But then so does ignorance.",
        author: "Sir Claus Moser",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King Jr.",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Do what you can, where you are, with what you have.",
        author: "Teddy Roosevelt",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        author: "Tony Robbins",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Dreaming, after all, is a form of planning.",
        author: "Gloria Steinem",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Remember no one can make you feel inferior without your consent.",
        author: "Eleanor Rosevelt",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "Life is what we make it, always has been, always will be.",
        author: "Grandma Moses",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "Either write something worth reading or do something worth writing.",
        author: "Benjamin Franklin",
        category: "Motivation",
        rarity: "Common"
    },
    {
        text: "If you can dream it, you can achieve it.",
        author: "Zig Ziglar",
        category: "Motivation",
        rarity: "Rare"
    },
    {
        text: "It is confidence in our bodies, minds, and spirits that allows us to keep looking for new adventures.",
        author: "Oprah Winfrey",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Each time we face our fear, we gain strength, courage, and confidence in the doing.",
        author: "Theodore Roosevelt",
        category: "Confidence",
        rarity: "Rare"
    },
    {
        text: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
        author: "Lucille Ball",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "You’re always with yourself, so you might as well enjoy the company.",
        author: "Diane Von Furstenberg",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "You are the only person on earth who can use your ability.",
        author: "Zig Ziglar",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "As soon as you trust yourself, you will know how to live.",
        author: "Johann Wolfgang von Goethe",
        category: "Confidence",
        rarity: "Epic"
    },
    {
        text: "Have confidence that if you have done a little thing well, you can do a bigger thing well too.",
        author: "David Storey",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "You have to expect things of yourself before you can do them.",
        author: "Michael Jordan",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "One important key to success is self-confidence. An important key to self-confidence is preparation.",
        author: "Arthur Ashe",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Confidence comes not from always being right but from not fearing to be wrong.",
        author: "Peter T. Mcintyre",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Talk to yourself like you would to someone you love.",
        author: "Brene Brown",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Trust yourself. You know more than you think you do.",
        author: "Dr. Benjamin Spock",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
        author: "Helen Keller",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Confidence is a habit that can be developed by acting as if you already had the confidence you desire to have.",
        author: "Brian Tracy",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "When I started counting my blessings, my whole life turned around.",
        author: "Willie Nelson",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "Always remember you are braver than you believe, stronger than you seem, and smarter than you think.",
        author: "Christopher Robin",
        category: "Confidence",
        rarity: "Epic"
    },
    {
        text: "If you’re presenting yourself with confidence, you can pull off pretty much anything.",
        author: "Katy Perry",
        category: "Confidence",
        rarity: "Epic"
    },
    {
        text: "You cannot be lonely if you like the person you’re alone with.",
        author: "Wayne Dyer",
        category: "Confidence",
        rarity: "Common"
    },
    {
        text: "I know that I know nothing.",
        author: "Socrates",
        category: "Philosophy",
        rarity: "Epic"
    },
    {
        text: "Nothing exists except atoms and empty space; everything else is opinion.",
        author: "Democritus",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "I am a citizen of the world.",
        author: "Diogenes",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "The most difficult thing in life is to know yourself.",
        author: "Thales",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "The journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
        category: "Philosophy",
        rarity: "Epic"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Conficius",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "Knowledge is power.",
        author: "Sir Francis Bacon",
        category: "Philosophy",
        rarity: "Legendary"
    },
    {
        text: "Man is born free, and everywhere he is in chains.",
        author: "Jean-Jacques Rousseau",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "Common sense is not so common.",
        author: "Voltaire",
        category: "Philosophy",
        rarity: "Legendary"
    },
    {
        text: "We have two ears and one mouth, so we should listen more than we speak.",
        author: "Zeno of Citium",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "Let your desires be ruled by reason.",
        author: "Cicero",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "We suffer more often in imagination than in reality.",
        author: "Seneca",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "Hard choices, easy life. Easy choices, hard life.",
        author: "Jerzy Grogorek",
        category: "Philosophy",
        rarity: "Common"
    },
    {
        text: "shh... just generate another one!",
        author: "Quotify Team",
        category: "Fun",
        rarity: "Mythic"
    },
    {
        text: "Hack Club ON TOP!",
        author: "Quotify Team",
        category: "Fun",
        rarity: "Mythic"
    }
];