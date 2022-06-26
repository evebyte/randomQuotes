// each object has a quote and a source
const quotesJSON = [
	{
		quote: "I have not failed. I've just found 10,000 ways that won't work.",
		source: "Thomas A. Edison",
	},
	{
		quote: "The best way to predict your future is to create it.",
		source: "Peter Drucker",
	},
	{
		quote:
			"The future belongs to those who believe in the beauty of their dreams.",
		source: "Eleanor Roosevelt",
	},
	{
		quote:
			"We have two lives, and the second begins when we realize we only have one.",
		source: "Confucius",
	},
	{
		quote:
			"If I have seen further it is by standing on the shoulders of Giants.",
		source: "Isaac Newton",
	},
	{
		quote: "The past has no power over the present moment.",
		source: "Eckhart Tolle",
	},
	{
		quote: "The only way to do great work is to love what you do.",
		source: "Steve Jobs",
	},
	{
		quote: "Your body is not a temple, it's an amusement park. Enjoy the ride.",
		source: "Anthony Bourdain",
	},
	{
		quote:
			"What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.",
		source: "Maya Angelou",
	},
	{
		quote:
			"If you can't explain it to a six year old, you don't understand it yourself.",
		source: "Albert Einstein",
	},
	{
		quote:
			"The first principle is that you must not fool yourself and you are the easiest person to fool.",
		source: "Richard Feynman",
	},
	{
		quote:
			"Man suffers only because he takes seriously what the gods made for fun.",
		source: "Alan Watts",
	},
	{
		quote:
			"If you want to go fast, go alone. If you want to go far, go together.",
		source: "African Proverb",
	},
	{
		quote: "Talk is cheap. Show me the code.",
		source: "Linus Torvalds",
	},
	{
		quote:
			"The most damaging phrase in the language is: 'It's always been done that way.'",
		source: "Grace Hopper",
	},
	{
		quote: "Anyone who has never made a mistake has never tried anything new.",
		source: "Albert Einstein",
	},
	{
		quote: "Never memorize something that you can look up.",
		source: "Albert Einstein",
	},
	{
		quote:
			"Your time is limited, so don't waste it living someone else's life.",
		source: "Steve Jobs",
	},
	{
		quote:
			"Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
		source: "Steve Jobs",
	},
	{
		quote:
			"When something is important enough, you do it even if the odds are not in your favor.",
		source: "Elon Musk",
	},
	{
		quote: "Somewhere, something incredible is waiting to be known.",
		source: "Carl Sagan",
	},
	{
		quote:
			"Books permit us to voyage through time, to tape the wisdom of our ancestors.",
		source: "Carl Sagan",
	},
	{
		quote:
			"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
		source: "Marie Curie",
	},
	{
		quote: "Be yourself; everyone else is already taken.",
		source: "Oscar Wilde",
	},
	{
		quote: "We are stubborn on vision. We are flexible on details.",
		source: "Jeff Bezos",
	},
	{
		quote:
			"Arguing that you don't care about the right to privacy because you have nothing to hide is on different than saying you don't care about free speech because you have nothing to say.",
		source: "Edward Snowden",
	},
	{
		quote:
			"Unfortunately, because aging is so common and natural, we tend to think of it as destiny or something we should accept.",
		source: "David Sinclair",
	},
	{
		quote:
			"It's not what happens to you, but how you react to it that matters.",
		source: "Epictetus",
	},
	{
		quote:
			"If you want to improve, be content to be thought foolish and stupid.",
		source: "Epictetus",
	},
	{
		quote:
			"The key is keep company only with people who uplift you, whose presence calls forth your best.",
		source: "Epictetus",
	},
	{
		quote:
			"The more you know yourself, the more clarity there is. Self-knowledge has no end - you don't come to an achievement, you don't come to a conclusion. It is an endless river.",
		source: "J. Krishnamurti",
	},
	{
		quote: "The journey of a thousand miles begins with a single step.",
		source: "Lao Tzu",
	},
	{
		quote:
			"The value of your travels does not hinge on how many stamps you have in your passport when you get home -- and the slow nuanced experience of a single country is always better than the hurried superficial experience of forty countries.",
		source: "Rolf Potts",
	},
	{
		quote:
			"I've found there is always some beauty left -- in nature, sunshine, freedom, in yourself; these can all help you.",
		source: "Anne Frank",
	},
	{
		quote: "Our truest life is when we are in dreams awake.",
		source: "Henry David Thoreau",
	},
	{
		quote:
			"It is not for me to judge another man's life. I must judge, I must choose, I must spurn, purely for myself. For myself, alone.",
		source: "Hermann Hesse",
	},
	{
		quote:
			"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		source: "Dr. Seuss",
	},
	{
		quote:
			"Live as if you were to die tomorrow. Learn as if you were to live forever.",
		source: "Mahatma Gandhi",
	},
	{
		quote: "We realize the importance of our voices only when we are silenced.",
		source: "Malala Yousafzai",
	},
	{
		quote:
			"Everything can be taken from a man but one thing: the last of the human freedoms - to choose one's attitude in any given set of circumstances, to choose one's own way.",
		source: "Viktor Frankl",
	},
	{
		quote: "Nah.",
		source: "Rosa Parks",
	},
	{
		quote:
			"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars, to change the world.",
		source: "Harriet Tubman",
	},
	{
		quote:
			"At the end of the day, we can endure much more than we think we can.",
		source: "Frida Kahlo",
	},
	{
		quote:
			"Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away.",
		source: "Frida Kahlo",
	},
	{
		quote: "A change is gonna come.",
		source: "Sam Cooke",
	},
	{
		quote:
			"This is the world you have made yourself, now you have to live in it.",
		source: "Nina Simone",
	},
	{
		quote:
			"Do we settle for the world as it is, or do we work for the world as it should be?",
		source: "Michelle Obama",
	},
	{
		quote:
			"Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.",
		source: "Tupac Shakur",
	},
	{
		quote: "The most courageous act is still to think for yourself. Aloud.",
		source: "Coco Chanel",
	},
	{
		quote:
			"The most important thing is to enjoy your life—to be happy—it's all that matters.",
		source: "Audrey Hepburn",
	},
	{
		quote:
			"I don't want other people to decide who I am. I want to decide that for myself.",
		source: "Emma Watson",
	},
	{
		quote:
			"Comfort can be dangerous. Comfort provides a floor but also a ceiling.",
		source: "Trevor Noah",
	},
	{
		quote:
			"Being chosen is the greatest gift you can give to another human being.",
		source: "Trevor Noah",
	},
	{
		quote: "It always seems impossible until it's done.",
		source: "Nelson Mandela",
	},
	{
		quote:
			"Education is the most powerful weapon which you can use to change the world.",
		source: "Nelson Mandela",
	},
	{
		quote: "Savor the moments that are warm and special and giggly.",
		source: "Sammy Davis Jr.",
	},
	{
		quote:
			"As a well spent day brings happy sleep, so life well used brings happy death.",
		source: "Leonardo da Vinci",
	},
	{
		quote:
			"Loving other people starts with loving ourselves and accepting ourselves.",
		source: "Elliot Page",
	},
	{
		quote:
			"We all need people who will give us feedback. That's how we improve.",
		source: "Bill Gates",
	},
	{
		quote: "We suffer more in imagination than in reality.",
		source: "Seneca",
	},
	{
		quote: "As long as you live, keep learning how to live.",
		source: "Seneca",
	},
	{
		quote: "We did not domesticate wheat. It domesticated us.",
		source: "Yuval Noah Harari",
	},
	{
		quote: "Biology enables, culture forbids.",
		source: "Yuval Noah Harari",
	},
	{
		quote:
			"Questions you cannot answer are usually far better than answers you cannot question.",
		source: "Yuval Noah Harari",
	},
	{
		quote:
			"Money is the most universal and most efficient system of mutual trust ever devised.",
		source: "Yuval Noah Harari",
	},
	{
		quote:
			"Brilliant thinking is rare, but courage is in even shorter supply than genius.",
		source: "Peter Thiel",
	},
	{
		quote:
			"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.",
		source: "Malcolm X",
	},
	{
		quote: "Don't criticize what you can't understand.",
		source: "Bob Dylan",
	},
	{
		quote: "He not busy being born is busy dying.",
		source: "Bob Dylan",
	},
	{
		quote:
			"Today's 'best practices' lead to dead ends; the best paths are new and untried.",
		source: "Peter Thiel",
	},
	{
		quote:
			"In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.",
		source: "Friedrich Nietzsche",
	},
	{
		quote:
			"Become the best in the world at what you do. Keep redifing what you do until this is true.",
		source: "Naval Ravikant",
	},
	{
		quote:
			"If you can't see yourself working with someone for life, don't work with them for a day.",
		source: "Naval Ravikant",
	},
	{
		quote:
			"A fit body, a calm mind, a house full of love. These things cannot be bought -- they must be earned.",
		source: "Naval Ravikant",
	},
	{
		quote:
			"Free education is abundant, all over the Internet. It's the desire to learn that's scarce.",
		source: "Naval Ravikant",
	},
	{
		quote: "The most important investment you can make is in yourself.",
		source: "Warren Buffett",
	},
	{
		quote:
			"Most people are fast to stop you before you get started but hesitate to get in the way if you're moving.",
		source: "Timothy Ferriss",
	},
	{
		quote:
			"'Someday' is a disease that will take your dreams to the grave with you.",
		source: "Timothy Ferriss",
	},
	{
		quote: "You see persons and things not as they are but as you are.",
		source: "Anthony de Mello",
	},
	{
		quote:
			"Fun is one of the most important - and underrated - ingredients in any successful venture. If you're not having fun, then it's probably time to call it quits and try something else.",
		source: "Richard Branson",
	},
];

// getRandomQuote function
const getRandomQuote = () => {
	const randomIndex = Math.floor(Math.random() * quotesJSON.length);
	return quotesJSON[randomIndex];
};

// export everything
export { quotesJSON, getRandomQuote };
