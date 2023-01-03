let sentences_easy = new Array()
let sentences_medium = new Array()
let sentences_hard = new Array()

sentences_easy = [
    "Now I need to ponder my existence and ask myself if I'm truly real",
    "He set out for a short walk, but now all he could see were mangroves and water were for miles.",
    "As he looked out the window, he saw a clown walk by.",
    "It's never comforting to know that your fate depends on something as unpredictable as the popping of corn.",
    "They decided to plant an orchard of cotton candy.",
    "Nudist colonies shun fig-leaf couture.",
    "Smoky the Bear secretly started the fires.",
    "You can't compare apples and oranges, but what about bananas and plantains?",
    "The teens wondered what was kept in the red shed on the far edge of the school grounds.",
    "I am never at home on Sundays.",
    "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.",
    "The tumbleweed refused to tumble but was more than willing to prance.",
    "Please tell me you don't work in a morgue.",
    "Art doesn't have to be intentional.",
    "With a single flip of the coin, his life changed forever.",
    "I honestly find her about as intimidating as a basket of kittens.",
    "The bullet pierced the window shattering it before missing Danny's head by mere millimeters.",
    "The efficiency with which he paired the socks in the drawer was quite admirable.",
]

sentences_medium = [
    "The busy bees buzzed from flower to flower, gathering nectar to bring back to the hive as the industrious ants carried tiny bits of food back to the nest.",
    "The adventurous hikers set out early in the morning, equipped with sturdy boots and backpacks filled with supplies for the long journey ahead.",
    "The bright yellow school bus pulled up to the curb, ready to transport the excited students to their first day of school.",
    "The graceful dancer twirled and leaped across the stage, her flowing dress and elegant movements captivating the audience.",
    "I was very proud of my nickname throughout high school but today- I couldn't be any different to what my nickname was.",
    "The friendly dolphin swam circles around the boat, its playful antics delighting the tourists on board.",
    "The majestic mountain peak rose high above the clouds, its rugged peaks and valleys visible for miles.",
    "The curious toddler explored the room, discovering new toys and objects to play with as the proud parents watched on with amusement.",
    "The friendly golden retriever chased after the frisbee, barking happily as it retrieved the toy and brought it back to its owner.",
]

sentences_hard = [
    "The sun was setting over the horizon, casting a warm glow over the city as the people bustled about, rushing to finish their errands before the nightfall. The air was filled with the sounds of car horns and busy footsteps, and the smell of freshly baked bread wafted from the bakery on the corner. Despite the hectic pace of life, there was a sense of community and togetherness in the air, as people greeted one another with friendly smiles and small acts of kindness. It was a moment of peace in the midst of the chaos, and one that would be remembered fondly by all who experienced it.",
    "The sound of the waves crashing against the shore was soothing as I sat on the beach, watching the seagulls flying overhead. The sand was cool beneath my feet and the salty ocean breeze blew through my hair. I closed my eyes and took a deep breath, feeling the tension and stress of the day melting away. It was moments like these that I lived for, when the world slowed down and I was able to just be, to exist in the present and let go of all my worries. The sun was beginning to set, painting the sky in a stunning array of orange, pink, and purple hues. I knew I should head back home soon, but for now, I just wanted to stay here and soak up the peace and tranquility of the beach.",
    "The mountain air was crisp and fresh as I hiked through the wilderness, my feet pounding against the dirt path. The trees towered above me, their leaves rustling in the gentle breeze. The only sounds were the chirping of birds and the occasional squirrel scampering up a tree. It was a welcome change from the constant noise and chaos of the city. As I climbed higher, the view became more and more breathtaking, the rolling hills and valleys stretching out before me in all directions. I stopped to catch my breath and take it all in, feeling a sense of accomplishment and gratitude for the opportunity to experience such beauty. It was moments like these that made all the struggles and hard work worth it.",
    "The rain pattered softly against the window, a lulling sound that made it easy to drift off to sleep. I snuggled deeper into my blankets, feeling warm and content. Outside, the world was gray and dreary, but in my cozy bed, I was safe and protected from the storm. As I drifted off, I couldn't help but feel grateful for the simple joys in life, like a soft bed and a warm blanket on a rainy day.",
    "The city was alive with energy as the night fell and the neon lights came on. People bustled about, rushing to meet up with friends or get home after a long day. The streets were filled with the sounds of cars honking and people chatting, and the smells of street food and exhaust fumes filled the air. Despite the chaos, there was a sense of excitement and possibility in the air, as if anything could happen on a night like this. I walked through the crowds, taking it all in and feeling alive in the energy of the city. It was moments like these that made me love the hustle and bustle of city life.",
]

exports.GenerateSentence = GenerateSentence;

function GenerateSentence(difficulty, punctuations) {
    if (typeof (difficulty) != "string" || typeof (punctuations) != "boolean") {
        console.log("Program Error: Invalid variable data types");
        return null;
    }
    if (difficulty == "easy") {
        if (punctuations == false) {
            let index = Math.floor(Math.random() * sentences_easy.length);
            return sentences_easy[index].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        } else {
            let index = Math.floor(Math.random() * sentences_easy.length);
            return sentences_easy[index];
        }
    } else if (difficulty == "medium") {
        if (punctuations == false) {
            let index = Math.floor(Math.random() * sentences_medium.length);
            return sentences_medium[index].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        } else {
            let index = Math.floor(Math.random() * sentences_medium.length);
            return sentences_medium[index];
        }
    } else if (difficulty == "hard") {
        if (punctuations == false) {
            let index = Math.floor(Math.random() * sentences_hard.length);
            return sentences_hard[index].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        } else {
            let index = Math.floor(Math.random() * sentences_hard.length);
            return sentences_hard[index];
        }
    } else {
        console.log("Program Error: Unknown difficulty");
        return null;
    }
}