import { useState, useEffect, useRef } from 'react/cjs/react.development'
import Letter from '../components/letter'
import './../styles/hangman.css'

const Hangman = (props) => {
    const [word, changeWord] = useState('')
    const [split, changeSplit] = useState([])

    const [hints, changeHints] = useState(3)

    const [hint, changeHint] = useState('')

    const [lives, changeLife] = useState(0)

    const [changed, changeCh] = useState(false)

    const words = ["rumor","happen","match","sail","sick","floor","summit","shadow","census","chorus","launch","abbey","eject","resist","guilt","repeat","drama","easy","morsel","swipe","equip","reader","pray","grave","cord","cheek","figure","rebel","native","rack","fade","basket","reform","hall","area","root","breeze","shift","cane","cash","hour","galaxy","breed","straw","offset","speech","appear","porter","mosque","flush","sheet","whip","finger","suite","glare","base","catch","cheque","critic","circle","block","talk","salad","bronze","occupy","morale","policy","weak","narrow","essay","Koran","direct","aware","worth","choose","outer","stamp","agile","weave","case","lift","shell","liver","safari","linear","star","makeup","snack","snow","cope","fault","alive","ideal","foot","reduce","solid","inch","arise","master","sigh","shelf","brake","admire","leader","tooth","bitch","coach","dare","beam","sell","change","broken","edge","absorb","side","basin","mess","crown","effort","burst","series","upset","beard","lane","palm","wing","torch","heaven","young","stand","polish","pardon","mouth","sphere","charge","grace","back","writer","bridge","even","rent","endure","story","remain","gloom","exile","need","revise","punch","future","date","forest","crash","bald","coup","coma","soak","joint","begin","screen","apple","weight","yard","order","sermon","bird","pity","efflux","mirror","stroll","menu","tube","guest","terms","reveal","long","scrap","rough","lake","score","summer","orbit","seem","wonder","bold","thumb","attack","coffin","sketch","form","tumble","half","member","bacon","rush","castle","poison","mail","steam","core","snail","seller","invite","disk","ready","refer","indoor","kill","weapon","haunt","TRUE","slice","fame","extent","knife","party","margin","tray","number","medal","bottle","throw","cafe","driver","source","cook","frank","absent","unique","bland","jury","sofa","bundle","brag","clock","debut","nuance","aisle","stroke","wrap","real","wound","slump","friend","kick","powder","crouch","chord","shine","smile","garage","nerve","mayor","depart","lock","oral","close","choke","virtue","tiger","honor","soft","stable","final","pour","snake","prize","damage","donor","land","boat","patrol","light","park","ring","revoke","field","method","widen","chance","revive","tile","watch","pillow","waist","spit","spirit","host","dinner","dine","gown","slip","give","still","item","hurl","cancer","guitar","silk","moving","fence","yearn","oppose","rank","goal","lawyer","turn","rear","hole","asylum","plant","output","detail","soar","entry","full","swim","flex","draw","horn","curl","herd","rock","plan","zone","groan","money","adopt","eaux","space","danger","tract","racism","month","stream","sample","knot","outfit","decide","fair","runner","pain","brown","skate","dome","minor","text","wander","heel","lemon","find","braid","gold","design","seal","title","abuse","bake","king","mile","wine","voice","steep","take","club","jockey","seize","hold","center","filter","shower","blue","bread","enemy","lean","dress","gravel","know","jacket","navy","tone","exact","arch","stake","last","slap","spell","stitch","jest","tiptoe","grain","deck","fire","tired","fight","common","soil","wild","shiver","bill","bishop","dawn","rice","bulb","free","dream","excuse","credit","miss","muscle","offend","fine","chew","cousin","dull","acid","rifle","crew","Venus","truck","remind","trace","effect","stun","debate","glory","crowd","slam","barrel","grief","store","chin","mercy","wall","pawn","debt","layout","video","stem","copy","belief","sweep","appeal","army","hike","asset","brave","list","thread","decade","noble","polite","pile","frame","fate","grip","virus","pure","tidy","sodium","harbor","thigh","public","view","taxi","bait","riot","ridge","tongue","utter","build","funny","scene","trip","movie","scan","ritual","planet","sale","fare","option","just","study","note","tycoon","please","survey","ankle","double","poem","enjoy","useful","drug","theft","horse","pack","instal","fear","quota","bowel","cover","rape","arena","split","elite","allow","wake","grind","doll","crime","cruel","remark","ditch","insure","clue","favor","topple","move","memory","seed","chaos","X-ray","follow","swear","greet","tactic","column","style","smash","lend","tail","coffee","press","wire","lead","bench","belt","penny","obese","taste","poll","quote","expand","mask","golf","ignite","worm","dragon","tasty","sticky","ivory","spoil","strike","pepper","pilot","iron","gene","reach","sight","bother","twin","heat","file","jelly","angle","desire","amber","neck","vain","float","boom","sting","winter","facade","equal","dozen","valley","tell","want","fairy","carry","bite","string","size","jump","ride","reward","site","teach","help","ignore","gaffe","diet","rate","animal","camera","marble","jail","novel","horror","herb","banner","remedy","mold","desk","aspect","lung","hero","course","fleet","angel","bring","banana","script","room","answer","award","tread","impact","formal","solve","pump","scream","nature","theme","tumour","sweat","ferry","idea","trust","visual","feast","misery","loose","kidnap","lobby","relate","peace","onion","exempt","count","branch","test","harass","bolt","flag","brand","panel","drown","bless","mark","layer","volume","player","dash","prince","locate","cotton","zero","lunch","mature","bind","care","late","deputy","rider","drop","basic","ticket","wait","deep","storm","short","wear","banish","robot","make","earwax","review","sleeve","thesis","black","bell","clear","flock","mind","colony","market","loss","heroin","patent","love","snub","prison","refund","petty","part","card","issue","drain","deadly","tempt","frown","goat","term","drag","vote","east","turkey","flow","lamb","cycle","buffet","prove","moment","show","wage","cower","hammer","heavy","spin","drawer","panic","salt","inside","pull","shrink","shorts","senior","square","lily","meet","dairy","hand","canvas","hell","poor","embryo","meal","year","budget","viable","notice","marsh","punish","shame","rung","wrist","nose","escape","elect","shave","smoke","fill","train","lost","cheap","shop","mutter","fibre","faint","vague","arrest","stool","thaw","colon","high","family","injury","work","enfix","Bible","fruit","person","crisis","pick","stock","bond","urge","fresh","pride","fail","jewel","bloody","virgin","chalk","axis","ballet","laser","extend","desert","cheat","marine","slab","preach","front","ladder","toast","safety","feel","woman","muggy","rise","skip","echo","stage","chest","flight","tease","kidney","forbid","brick","origin","prey","color","draft","team","cheese","agree","junior","carpet","maze","city","shot","suffer","lace","cinema","basis","pastel","large","acquit","afford","organ","hair","power","chase","merit","elbow","energy","place","velvet","exotic","growth","proud","thin","pair","fish","lodge","thank","labour","slime","gain","belly","garlic","climb","latest","time","eagle","wife","pause","chop","kettle","green","album","swell","matrix","rich","wood","sink","spring","worry","tick","voter","fist","plead","relief","slant","bike","brush","fever","door","cable","profit","glass","path","dead","corpse","creed","bang","scrape","minute","thick","jungle","moral","bride","handy","giant","death","start","Sunday","squash","tune","clean","gossip","chain","sacred","father","salmon","tense","halt","gutter","middle"]
    
    const [list, changeList] = useState(['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden'])

    const [info, changeInfo] = useState('Начните игру')

    function randomWord() {
        const random = Math.floor(1 + Math.random() * words.length)
        changeWord(words[random])
        changeSplit(words[random].split(''))
        console.log(words[random].split(''))

        changeList(['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden'])

        changeInfo('Введите букву')
        changeHints(3)
    }

    useEffect(() => {
        //const lifes = Math.round(split.length * 1.5)
        changeLife(10)
    }, [split])

    const input = useRef()
    const letter = useRef()

    function clearInput() {
        /*changeWord('')
        changeSplit([])*/

        /*if((lives - 1) < 5) {
            let randHint = Math.floor(Math.random() * hints2.length)
            let arr2 = hints
            arr2.push(hints2[randHint])
            changeHints(arr2)

            let hint2 = ''
            for (const el of hints) {
                hint2 += el
            }
            changeHint(hint2)
        }*/
        if(hints !== 0 && lives - 1 <= 6) {
            let random = Math.floor(Math.random() * split.length)
    
            input.current.value = split[random]
            checkInput()
            changeInfo('Использована подсказка!')
            changeHint(split[random])
            changeHints(hints - 1)
            changeLife(lives - 1)
        } else if(hints === 0) {
            changeInfo('Подсказки закончились!')
        } else if(lives - 1 > 6) {
            changeInfo('Подсказки доступны после 6-й жизни!')
        }
    }

    function checkInput() {
        /*lives > 0 && (input.current.value !== '' || input.current.value !== ' '*/
        if(input.current.value === '' || input.current.value === ' ') {
            changeInfo('Пусто')
        } else if(split.includes(input.current.value)) {
            changeInfo('Правильно!')
            //input.current.value = ''
        } else {
            changeInfo(`Нет такой буквы`)
            changeLife(lives - 1)
            let arr = list
            arr[lives - 1] = 'open'
            changeList(arr)

            if((lives - 1) === 0) {
                changeInfo(`Игра окончена! Слово: ${word}`)
            }
        }
        changeCh(true)
        console.log(changed)

        setTimeout(() => {
            changeCh(false)
        }, 1000)
    }

    return (
        <div className = 'main-hg'>
            <h1>Виселица</h1>
            <div className = 'game-start-hg' onClick = {() => {randomWord()}}>
                <p>Начать игру</p>
            </div>
            <div className = 'input'>
                <p className = 'lives'>{lives}</p>
                <input className = 'ltr-input' placeholder = 'Введите букву' type = 'text' ref = {input}></input>
                <div className = 'delete' onClick = {clearInput}>
                    <p>Удалить</p>
                </div>
                <div className = 'check' onClick = {checkInput}>
                    <p>Проверить</p>
                </div>
            </div>
            <div className = 'hangman'>
                <div className = 'man'>
                    <div className = 'human'>
                        <div className = {`head ${list[5]}`}></div>
                        <div className = {`body ${list[4]}`}></div>
                        <div className = {`hand1 ${list[3]}`}></div>
                        <div className = {`hand2 ${list[2]}`}></div>
                        <div className = {`leg1 ${list[1]}`}></div>
                        <div className = {`leg2 ${list[0]}`}></div>
                    </div>

                    <div className = 'sticks'>
                        <div className = {`rope ${list[6]}`}></div>
                        <div className = {`stick1 ${list[7]}`}></div>
                        <div className = {`stick2 ${list[8]}`}></div>
                        <div className = {`ground ${list[9]}`}></div>
                    </div>
                </div>
                <div className = 'word-find'>
                    <p className = 'info'>{info}</p>
                    <p className = 'hint'>Осталось подзказок: {hints}</p>
                    <div className = 'all-ltrs'>
                        {split.map(el => <Letter key = {el.id} text = {el} val = {input.current.value} changed = {changed} ex = {changed} hints = {hint}>{el}</Letter>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hangman