// arrays
let subjlist = ["you", "strangers all", "your old classmates", "people",
  "your parents", "your grandparents", "kids", "coworkers",
  "your roommates", "your exes", "your children", "your sisters",
  "your brothers", "your dogs", "your pets", "your cats",
  "your fishes"]
let adjlist = ["enthusiastic", "heartening", "meek", "reasonable", "talented",
  "accommodating", "clever", "ethical", "helpful", "meritorious",
  "refined", "temperate", "accomplished", "commendable", "excellent",
  "high-class", "moral", "reliable", "terrific", "adept",
  "compassionate", "exceptional", "honest", "neat", "remarkable",
  "tidy", "admirable", "composed", "exemplary", "honorable", "noble",
  "resilient", "top quality", "agreeable", "considerate", "exquisite",
  "hopeful", "obliging", "respectable", "tremendous", "amazing",
  "extraordinary", "humble", "observant", "respectful",
  "trustworthy", "appealing", "cooperative", "fabulous", "important",
  "optimistic", "resplendent", "trusty", "astute", "correct",
  "faithful", "impressive", "organized", "responsible", "truthful",
  "attractive", "courageous", "fantastic", "incisive", "outstanding",
  "robust", "unbeatable", "awesome", "courteous", "fascinating",
  "incredible", "peaceful", "selfless", "understanding", "beautiful",
  "dazzling", "fine", "innocent", "perceptive", "sensational",
  "unequaled", "benevolent", "decent", "first-class", "insightful",
  "perfect", "sensible", "unparalleled", "brave", "delightful",
  "fortitudinous", "inspiring", "pleasant", "serene", "upbeat",
  "breathtaking", "dependable", "gallant", "intelligent", "pleasing",
  "sharp", "valiant", "bright", "devoted", "generous", "joyful",
  "polite", "shining", "valuable", "brilliant", "diplomatic", "gentle",
  "judicious", "positive", "shrewd", "vigilant", "bubbly",
  "discerning", "gifted", "just", "praiseworthy", "smart", "vigorous",
  "buoyant", "disciplined", "giving", "kindly", "precious",
  "sparkling", "virtuous", "calm", "elegant", "gleaming", "laudable",
  "priceless", "spectacular", "well mannered", "capable", "elevating",
  "glowing", "likable", "principled", "splendid", "wholesome",
  "charitable", "enchanting", "good", "lovable", "prompt", "steadfast",
  "wise", "charming", "encouraging", "gorgeous", "lovely", "prudent",
  "stunning", "witty", "chaste", "endearing", "graceful", "loyal",
  "punctual", "super", "wonderful", "cheerful", "energetic",
  "gracious", "luminous", "pure", "superb", "worthy", "chivalrous",
  "engaging", "great", "magnanimous", "quick", "superior", "zesty",
  "gallant", "enhanced", "happy", "magnificent", "radiant",
  "supportive", "civil", "enjoyable", "hardy", "marvelous", "rational",
  "supreme"]
let youverblist = ["are", "remind", "make", "represent"]
let regverblist = ["love", "applaud", "praise", "respect", "appreciate",
  "commend", "cherish", "admire", "enjoy", "worship", "idolize",
  "marvel at", "treasure", "esteem", "value"]
let objlist = ["object"]
let flowerlist = ["azalea", "buttercup", "california poppy", "chrysanthemum",
  "daffodil", "geranium", "iris", "lavender", "periwinkle",
  "petunia", "snapdragon", "violet", "zinnia", "marigold",
  "dahlias", "peony", "tulip", "sunflower", "rose", "orchid",
  "lily", "daisy", "gardenia", "carnation"]
let foodlist = ["asparagus", "apple", "avocado", "almond", "arugula salad",
  "roasted artichoke", "bowl of applesauce", "piece of ahi tuna", "bruscetta", "slice of bacon", "can of black beans", "bagels", "can of baked beans", "slab of barbecue ribs", "bottle of beer", "bowl of bisque", "slice of bread", "broccoli", "burrito", "baba ganoush", "cabbage", "slice of cake", "carrot", "carne asada taco", "cheese", "roasted chicken", "fried chicken", "fried catfish", "bag of chips", "chocolate bar", "bowl of clam chowder", "chocolate chip cookie", "ear of corn", "frosted cupcake", "crab leg", "bowl of curry", "bowl of cereal", "chimichanga", "seven layer dip", "roasted duck", "dumpling", "donuts", "plate of scrambled eggs", "enchilada", "eggroll",
  "english muffin", "fajita", "falafel", "fondue", "piece of french toast", "french dip sandwich", "gnocchi", "bag of granola", "grape", "green bean", "bowl of guacamole", "bowl of gumbo", "bowl of grits", "graham cracker", "slice of ham", "hamburger", "cheeseburger", "bacon cheeseburger", "spoon of honey", "huevos ranchero", "hash brown", "hot dog", "hummus", "bowl of ice cream", "stew", "jambalaya", "grape jelly", "strawberry jam", "beef jerky", "jalapeño", "cream puff", "kale salad", "kabob", "kiwi", "kidney bean", "kingfish", "lobster", "spaghetti", "shrimp scampi", "lasagna", "meatball", "bowl of noodles", "pizza", "pepperoni", "pancake", "quesadilla", "quiche", "reuben sandwich", "tater tot", "slice of toast", "waffle", "yogurt", "baked ziti"]
let animallist = ["puppy", "turtle", "parrot", "cat", "kitten", "goldfish",
  "tropical fish", "hamster", "cow", "ducks", "shrimp", "pig", "crab", "bee", "fish", "dove", "chicken", "crow", "peacock", "sparrow", "goose", "stork", "pigeon", "turkey", "hawk", "bald eagle", "raven", "flamingo", "seagull", "ostrich", "swallow", "black bird", "penguin", "robin", "swan", "chimpanzee", "ox", "lion", "panda", "otter", "mouse", "kangaroo", "goat", "horse", "monkey", "mole", "elephant", "leopard", "fox", "sheep", "deer",
  "giraffe", "woodpecker", "camel", "koala", "alligator", "owl", "tiger", "bear", "blue whale", "coyote", "raccoon", "arctic wolf", "crocodile", "dolphin", "squirrel", "snake", "hippopotamus", "elk", "gorilla", "bat", "hare", "toad", "frog", "rat", "badger", "lizard", "hedgehog", "reindeer", "rabbit", "fish", "seal", "octopus", "shark", "seahorse", "walrus", "starfish", "whale", "jellyfish", "squid", "lobster", "pelican", "clam", "shells", "sea urchin", "cormorant", "sea anemone", "sea turtle", "sea lion", "coral"]
let nounlist = flowerlist + foodlist + animallist
let modverblist = ["the way", "how"]
let pplverblist = ["eat", "drink", "say", "love", "dance to", "sing"]
let drinklist = ["milk", "lemonade", "water", "green tea", "black tea", "coffee", "soda", "pop", "cola", "sweet tea", "beer", "wine", "arnold palmers", "hot chocolate", "apple juice", "orange juice",
  "chocolate milk", "strawbery milk", "vanilla milkshakes", "chocolate milkshakes", "strawberry milkshakes", "sangria", "tomato juice", "pineapple juice", "lime juice", "cranberry juice", "smoothies", "horchata"]
let saylist = ["\"Hello.\"", "You're an awesome friend.\"",
  "\"You're a gift to those around you.\"", "\"You're a smart cookie.\"", "\"You are awesome!\"", "\"You have impeccable manners.\"", "\"I like your style.\"", "\"You have the best laugh.\"", "\"I appreciate you.\"", "\"You are the most perfect you there is.\"", "\"You are enough.\"", "\"You're strong.\"", "\"Your perspective is refreshing.\"", "\"I'm grateful to know you.\"", "\"You light up the room.\"", "\"You deserve a hug right now.\"", "\"You should be proud of yourself.\"", "\"You're more helpful than you realize.\"", "\"You have a great sense of humor.\"",
  "\"You've got an awesome sense of humor!\"", "\"You are really courageous.\"", "\"Your kindness is a balm to all who encounter it.\"", "\"You're all that and a super-size bag of chips.\"", "\"On a scale from 1 to 10\"", "\" you're an 11.\"", "\"You are strong.\"", "\"You're even more beautiful on the inside than you are on the outside.\"", "\"You have the courage of your convictions.\"", "\"I'm inspired by you.\"", "\"You're like a ray of sunshine on a really dreary day.\"", "\"You are making a difference.\"", "\"Thank you for being there for me.\"", "\"You bring out the best in other people."]
let musiclist = ["pop music", "rock music", "classical music", "alt music", "country music", "electronic dance music",
  "jazz music", "dubstep music", "rhythm and blues music", "techno music"]
let songlist = ["the Happy Birthday song", "Prisoner of Love by Perry Como",
  "Near You by Francis Craig", "Twelfth Street Rag by Pee Wee Hunt", "Riders in the Sky by Vaughn Monroe Orchestra", "Goodnight", " Irene by Gordon Jenkins and The Weavers", "Too Young by Nat King Cole", "Blue Tango by Leroy Anderson", "Song from Moulin Rouge by Percy Faith", "Little Things Mean a Lot by Kitty Kallen", "Cherry Pink and Apple Blossom White by Perez Prado", "Heartbreak Hotel by Elvis Presley", "All Shook Up by Elvis Presley", "Nel Blu Dipinto di Blu (Volare) by Domenico Modugno", "The Battle of New Orleans by Johnny Horton", "Theme from A Summer Place by Percy Faith", "Tossin' and Turnin' by Bobby Lewis", "Stranger on the Shore by Mr. Acker Bilk", "Surfin' U.S.A. by The Beach Boys", "Sugar Shack by Jimmy Gilmer and the Fireballs", "I Want to Hold Your Hand by The Beatles", "Wooly Bully by Sam the Sham & the Pharaohs", "California Dreamin' by  by The Mamas and the Papas", "Ballad of the Green Berets by Sgt. Barry Sadler", "To Sir with Love by Lulu", "Hey Jude by The Beatles", "Sugar", " Sugar by The Archies", "Bridge over Troubled Water by Simon & Garfunkel", "Joy to the World by Three Dog Night", "The First Time Ever I Saw Your Face by Roberta Flack", "Tie a Yellow Ribbon 'Round the Ole Oak Tree by Tony Orlando and Dawn", "The Way We Were by Barbra Streisand", "Love Will Keep Us Together by Captain & Tennille", "Silly Love Songs by Wings", "Tonight's the Night (Gonna Be Alright) by Rod Stewart", "Shadow Dancing by Andy Gibb", "My Sharona by The Knack", "Call Me by Blondie", "Bette Davis Eyes by Kim Carnes", "Physical by Olivia Newton-John", "Every Breath You Take by The Police", "When Doves Cry by Prince", "Careless Whisper by Wham!", "That's What Friends Are For by Dionne & Friends", "Walk Like an Egyptian by The Bangles", "Faith by George Michael", "Look Away by Chicago", "Hold On by Wilson Phillips", "(Everything I Do) I Do It for You by Bryan Adams", "End of the Road by Boyz II Men", "I Will Always Love You by Whitney Houston", "The Sign by Ace of Base", "Gangsta's Paradise by Coolio featuring L.V.", "Macarena (Bayside Boys Mix) by Los del Río", "Candle in the Wind by Elton John", "Too Close by Next", "Believe by Cher", "Breathe by Faith Hill", "Hanging by a Moment by Lifehouse", "How You Remind Me by Nickelback", "In Da Club by  Cent", "Yeah! by Usher featuring Lil Jon and Ludacris", "We Belong Together by Mariah Carey", "Bad Day by Daniel Powter", "Irreplaceable  by Beyoncé", "Low by Flo Rida featuring T-Pain", "Boom Boom Pow by The Black Eyed Peas", "Tik Tok by Kesha", "Rolling in the Deep by Adele", "Somebody That I Used to Know by Gotye featuring Kimbra", "Thrift Shop by Macklemore & Ryan Lewis featuring Wanz", "Happy by Pharrell Williams", "Uptown Funk by Mark Ronson featuring Bruno Mars", "Love Yourself by Justin Bieber", "Shape of You by Ed Sheeran", "God's Plan by Drake", "Old Town Road by Lil Nas X featuring Billy Ray Cyrus", "Hey! Ba-Ba-Re-Bop by Lionel Hampton", "Ain't Nobody Here But Us Chickens by Louis Jordan", "Long Gone by Sonny Thompson", "The Hucklebuck by Paul Williams", "Pink Champagne by Joe Liggins", "Sixty Minute Man by The Dominoes", "Lawdy Miss Clawdy by Lloyd Price", "(Mama) He Treats Your Daughter Mean by Ruth Brown", "Work With Me", " Annie by Midnighters", "Pledging My Love by Johnny Ace", "Honky Tonk by Bill Doggett", "Jailhouse Rock/Treat Me Nice by Elvis Presley", "What Am I Loving For/Hang Up My Rock & Roll Shoes by Chuck Willis", "Stagger Lee by Lloyd Price", "Kiddio by Brook Benton", "Tossin' and Turnin' by Bobby Lewis", "Soul Twist by King Curtis", "Part Time Love by Little Johnny Taylor", "I Can't Help Myself (Sugar Pie Honey Bunch) by Four Tops", "Hold On! I'm Comin' by Sam & Dave", "Respect by Aretha Franklin", "Say It Loud – I'm Black and I'm Proud by James Brown", "What Does It Take (To Win Your Love) by Jr. Walker and the All Stars", "I'll Be There by Jackson ", "Mr. Big Stuff by Jean Knight", "Let's Stay Together by Al Green", "Let's Get It On by Marvin Gaye", "Feel Like Makin' Love by Roberta Flack", "Fight the Power Pt.  by Isley Brothers", "Disco Lady by Johnnie Taylor", "Float On by The Floaters", "Serpentine Fire by Earth", " Wind & Fire", "Good Times by Chic", "Let's Get Serious by Jermaine Jackson", "Endless Love by Diana Ross and Lionel Richie", "That Girl by Stevie Wonder", "Sexual Healing by Marvin Gaye", "When Doves Cry by Prince", "Rock Me Tonight (For Old Times Sake) by Freddie Jackson", "On My Own by Patti Labelle and Michael McDonald", "Stop to Love by Luther Vandross", "I Want Her by Keith Sweat", "Superwoman by Karyn White", "Hold On by En Vogue", "Written All Over Your Face by Rude Boys", "Come and Talk to Me by Jodeci", "I Will Always Love You by Whitney Houston", "Bump n' Grind by R. Kelly", "Creep by TLC", "You're Makin' Me High/Let It Flow by Toni Braxton", "In My Bed by Dru Hill", "Too Close by Next", "Fortunate by Maxwell", "Let's Get Married by Jagged Edge", "Fiesta by R. Kelly featuring Jay-Z", "Foolish by Ashanti", "In Da Club by  Cent", "If I Ain't Got You by Alicia Keys", "Let Me Love You by Mario", "Be Without You  by Mary J. Blige", "Lost Without U by Robin Thicke", "Like You'll Never See Me Again by Alicia Keys", "Blame It by Jamie Foxx featuring T-Pain", "Un-Thinkable (I'm Ready) by Alicia Keys", "Sure Thing by Miguel", "Love on Top by Beyoncé", "Thrift Shop by Macklemore and Ryan Lewis featuring Wanz", "Happy by Pharrell Williams", "See You Again by Wiz Khalifa featuring Charlie Puth", "One Dance by Drake featuring Wizkid and Kyla", "That's What I Like by Bruno Mars", "God's Plan by Drake", "Old Town Road by Lil Nas X featuring Billy Ray Cyrus", "New Spanish Two Step by Bob Wills", "Smoke! Smoke! Smoke! (That Cigarette) by Tex Williams Western Caravan", "Bouquet of Roses by Eddy Arnold", "Lovesick Blues by Hank Williams and the Drifting Cowboys", "I'm Movin' On by Hank Snow", "Cold", " Cold Heart by Hank Williams", "Wild Side of Life by Hank Thompson", "Kaw-Liga by Hank Williams", "I Don't Hurt Anymore by Hank Snow", "In the Jailhouse Now by Webb Pierce", "Crazy Arms by Ray Price", "Gone by Ferlin Husky", "Oh Lonesome Me/I Can't Stop Loving You by Don Gibson", "The Battle of New Orleans by Johnny Horton", "Please Help Me I'm Falling by Hank Locklin", "I Fall to Pieces by Patsy Cline", "Wolverton Mountain by Claude King", "Still by Bill Anderson", "My Heart Skips a Beat by Buck Owens", "What's He Doing in My World by Eddy Arnold", "Almost Persuaded by David Houston", "All the Time by Jack Greene", "Folsom Prison Blues by Johnny Cash", "My Life (Throw It Away If I Want To) by Bill Anderson", "Hello Darlin' by Conway Twitty", "Easy Loving by Freddie Hart", "My Hang-Up Is You by Freddie Hart", "You've Never Been This Far Before by Conway Twitty", "There Won't Be Anymore by Charlie Rich", "Rhinestone Cowboy by Glen Campbell", "Convoy by C.W. McCall", "Luckenbach", " Texas (Back to the Basics of Love) by Waylon Jennings", "Mamas Don't Let Your Babies Grow Up to Be Cowboys by Waylon & Willie", "I Just Fall in Love Again by Anne Murray", "My Heart/Silent Night (After the Fight) by Ronnie Milsap", "Fire and Smoke by Earl Thomas Conley", "Always on My Mind by Willie Nelson", "José Cuervo by Shelly West", "To All the Girls I've Loved Before by Julio Iglesias and Willie Nelson", "Lost in the Fifties Tonight by Ronnie Milsap", "Never Be You by Rosanne Cash", "Give Me Wings by Michael Johnson", "Don't Close Your Eyes by Keith Whitley", "A Better Man by Clint Black", "Nobody's Home by Clint Black", "Don't Rock the Jukebox by Alan Jackson", "I Saw the Light by Wynonna", "Chattahoochee by Alan Jackson", "I Swear by John Michael Montgomery", "Sold (The Grundy County Auction Incident) by John Michael Montgomery", "My Maria by Brooks & Dunn", "It's Your Love by Tim McGraw and Faith Hill", "Just to See You Smile by Tim McGraw", "Amazed by Lonestar", "How Do You Like Me Now?! by Toby Keith", "Ain't Nothing 'Bout You by Brooks & Dunn", "The Good Stuff by Kenny Chesney", "My Front Porch Looking In by Lonestar", "Live Like You Were Dying by Tim McGraw", "That's What I Love About Sunday by Craig Morgan", "If You're Going Through Hell (Before the Devil Even Knows) by Rodney Atkins", "Watching You by Rodney Atkins", "Just Got Started Lovin' You by James Otto", "I Run to You by Lady Antebellum", "Love Like Crazy by Lee Brice", "Crazy Girl by Eli Young Band", "Time Is Love by Josh Turner", "Cruise by Florida Georgia Line", "This Is How We Roll by Florida Georgia Line featuring Luke Bryan", "Take Your Time by Sam Hunt", "H.O.L.Y. by Florida Georgia Line", "Body Like a Back Road by Sam Hunt", "Meant to Be by Bebe Rexha featuring Florida Georgia Line", "Whiskey Glasses by Morgan Wallen"]
let justsong = ["the Happy Birthday song", "Prisoner of Love", "Near You", "Twelfth Street Rag", "Riders in the Sky", "Goodnight Irene", "Too Young", "Blue Tango", "Song from Moulin Rouge", "Little Things Mean a Lot", "Cherry Pink and Apple Blossom White", "Heartbreak Hotel", "All Shook Up", "Nel Blu Dipinto di Blu (Volare)", "The Battle of New Orleans", "Theme from A Summer Place", "Tossin' and Turnin'", "Stranger on the Shore", "Surfin' U.S.A.", "Sugar Shack", "I Want to Hold Your Hand", "Wooly Bully", "California Dreamin'", "Ballad of the Green Berets", "To Sir with Love", "Hey Jude", "Sugar Sugar", "Bridge over Troubled Water", "Joy to the World", "The First Time Ever I Saw Your Face", "Tie a Yellow Ribbon 'Round the Ole Oak Tree", "The Way We Were", "Love Will Keep Us Together", "Silly Love Songs", "Tonight's the Night (Gonna Be Alright)", "Shadow Dancing", "My Sharona", "Call Me", "Bette Davis Eyes", "Physical", "Every Breath You Take", "When Doves Cry", "Careless Whisper", "That's What Friends Are For", "Walk Like an Egyptian", "Faith", "Look Away", "Hold On", "(Everything I Do) I Do It for You", "End of the Road", "I Will Always Love You", "The Sign", "Gangsta's Paradise", "Macarena (Bayside Boys Mix)", "Candle in the Wind", "Too Close", "Believe", "Breathe", "Hanging", "How You Remind Me", "In Da Club", "Yeah!", "We Belong Together", "Bad Day", "Irreplaceable ", "Low", "Boom Boom Pow", "Tik Tok", "Rolling in the Deep", "Somebody That I Used to Know", "Thrift Shop", "Happy", "Uptown Funk", "Love Yourself", "Shape of You", "God's Plan", "Old Town Road", "Hey! Ba-Ba-Re-Bop", "Ain't Nobody Here But Us Chickens", "Long Gone", "The Hucklebuck", "Pink Champagne", "Sixty Minute Man", "Lawdy Miss Clawdy", "(Mama) He Treats Your Daughter Mean", "Work With Me Annie", "Pledging My Love", "Honky Tonk", "Jailhouse Rock/Treat Me Nice", "What Am I Loving For/Hang Up My Rock & Roll Shoes", "Stagger Lee", "Kiddio", "Tossin' and Turnin'", "Soul Twist", "Part Time Love", "I Can't Help Myself (Sugar Pie Honey Bunch)", "Hold On! I'm Comin'", "Respect", "Say It Loud – I'm Black and I'm Proud", "What Does It Take (To Win Your Love)", "I'll Be There", "Mr. Big Stuff", "Let's Stay Together", "Let's Get It On", "Feel Like Makin' Love", "Fight the Power Pt. ", "Disco Lady", "Float On", "Serpentine Fire", " Wind & Fire", "Good Times", "Let's Get Serious", "Endless Love",
  "That Girl", "Sexual Healing", "When Doves Cry", "Rock Me Tonight (For Old Times Sake)", "On My Own", "Stop to Love", "I Want Her", "Superwoman", "Hold On", "Written All Over Your Face", "Come and Talk to Me", "I Will Always Love You", "Bump n' Grind", "Creep", "You're Makin' Me High/Let It Flow", "In My Bed", "Too Close", "Fortunate", "Let's Get Married", "Fiesta", "Foolish", "In Da Club", "If I Ain't Got You", "Let Me Love You", "Be Without You ", "Lost Without U", "Like You'll Never See Me Again", "Blame It", "Un-Thinkable (I'm Ready)", "Sure Thing", "Love on Top", "Thrift Shop", "Happy", "See You Again", "One Dance", "That's What I Like", "God's Plan", "Old Town Road", "New Spanish Two Step", "Smoke! Smoke! Smoke! (That Cigarette)", "Bouquet of Roses", "Lovesick Blues", "I'm Movin' On", "Cold Cold Heart", "Wild Side of Life", "Kaw-Liga", "I Don't Hurt Anymore", "In the Jailhouse Now", "Crazy Arms", "Gone", "Oh Lonesome Me/I Can't Stop Loving You", "The Battle of New Orleans", "Please Help Me I'm Falling", "I Fall to Pieces", "Wolverton Mountain", "Still", "My Heart Skips a Beat", "What's He Doing in My World", "Almost Persuaded", "All the Time", "Folsom Prison Blues", "My Life (Throw It Away If I Want To)", "Hello Darlin'", "Easy Loving", "My Hang-Up Is You", "You've Never Been This Far Before", "There Won't Be Anymore", "Rhinestone Cowboy", "Convoy", "Luckenbach Texas (Back to the Basics of Love)", "Mamas Don't Let Your Babies Grow Up to Be Cowboys", "I Just Fall in Love Again", "Fire and Smoke", "Always on My Mind", "José Cuervo", "To All the Girls I've Loved Before", "Lost in the Fifties Tonight", "Never Be You", "Give Me Wings", "Don't Close Your Eyes", "A Better Man", "Nobody's Home", "Don't Rock the Jukebox", "I Saw the Light", "Chattahoochee", "I Swear", "Sold (The Grundy County Auction Incident)", "My Maria", "It's Your Love", "Just to See You Smile", "Amazed", "How Do You Like Me Now?!", "Ain't Nothing 'Bout You", "The Good Stuff", "My Front Porch Looking In", "Live Like You Were Dying", "That's What I Love About Sunday", "If You're Going Through Hell (Before the Devil Even Knows)", "Watching You", "Just Got Started Lovin' You", "I Run to You", "Love Like Crazy", "Crazy Girl", "Time Is Love", "Cruise", "This Is How We Roll", "Take Your Time", "H.O.L.Y.", "Body Like a Back Road", "Meant to Be", "Whiskey Glasses"]

// functions
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function compliment() {
  let subject = getRandom(subjlist)
  let predicate = ""
  let you = false
  if (subject == "you") { you = true }
  let adj = getRandom(adjlist)
  let noun = getRandom(nounlist)
  let adjnoun = adj + " " + noun
  let subj2 = getRandom(subjlist)
  let youverb = getRandom(youverblist)
  let pplverb = getRandom(pplverblist)
  let pplobj = ""
  let compliment = ""

  if (you) {
    if (youverb == "remind") {
      predicate = youverb + " " +
        subj2 + " of a " + adjnoun
    }
    else if (youverb == "make") {
      predicate = youverb + " " +
        subj2 + " feel like a " + adjnoun
    }
    else {
      predicate = youverb + " a " + adjnoun
    }
  }
  else {
    if (pplverb == "eat") {
      pplobj = getRandom(foodlist)
    }
    else if (pplverb == "drink") {
      pplobj = getRandom(drinklist)
    }
    else if (pplverb == "say") {
      pplobj = getRandom(saylist)
    }
    else if (pplverb == "love") {
      pplobj = "your " + adjnoun
    }
    else if (pplverb == "sing") {
      pplobj = getRandom(justsong)
    }
    else {
      pplobj = getRandom(musiclist + justsong)
    }
    predicate = getRandom(
      regverblist) + " " + getRandom(modverblist) + " you " + pplverb + " " + pplobj
  }

  compliment = subject + " " + predicate + "."
  return compliment
}

