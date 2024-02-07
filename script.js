const perguntas =  [
    {
        pergunta: '1)Qual elemento HTML é usado para definir um título para a página?',
        respostas: [
            'a)<header>',
            'b)<title>',
            'c)<h1>',
            'd)<heading>',
        ],
        correta: 2
    },

    {
        pergunta: '2)Qual propriedade CSS é usada para alterar a cor do texto?',
        respostas: [
            'a)font-style',
            'b)text-color',
            'c)color',
            'd)font-color',
        ],
        correta: 2
    },

    {
        pergunta: '3)Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?',
        respostas: [
            'a)getElementById()',
            'b)selectElement()',
            'c)querySelector()',
            'd)findById()',
        ],
        correta: 0
    },


    {
        pergunta: '4)Como se declara uma variável em JavaScript?',
        respostas: [
            'a)var myVariable;',
            'b)let myVariable;',
            'c)variable myVariable;',
            'd)const myVariable;',
        ],
        correta: 1
    },


    {
        pergunta: '5)Qual elemento HTML é usado para criar uma lista ordenada?',
        respostas: [
            'a)<ul>',
            'b)<li>',
            'c)<ol>',
            'd)<div>',
        ],
        correta: 2
    },

    {
        pergunta: '6)Qual propriedade CSS é usada para criar sombras',
        respostas: [
            'a)font-style',
            'b)box-shadow',
            'c)color',
            'd)font-color',
        ],
        correta: 1
    },


    {
        pergunta: '7)Como se escreve um comentário em JavaScript?',
        respostas: [
            'a)<!-- Este é um comentário -->',
            'b)/# Este é um comentário #/',
            'c)// Este é um comentário',
            'd)/* Este é um comentário */',
        ],
        correta: 2
    },

    {
        pergunta: '8)Qual propriedade CSS é usada para alterar a cor de fundo?',
        respostas: [
            'a)font-style',
            'b)background-color',
            'c)color',
            'd)font-color',
        ],
        correta: 1
    },

    {
        pergunta: '9)Qual é o operador de igualdade estrita em JavaScript?',
        respostas: [
            'a)==',
            'b)===',
            'c)=',
            'd)!==',
        ],
        correta: 1
    },


    {
        pergunta: '10)Qual é o operador de recebe em JavaScript?',
        respostas: [
            'a)==',
            'b)===',
            'c)=',
            'd)!==',
        ],
        correta: 2
    },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const motrarTotal = document.querySelector('#acertos span')
motrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl  dt').cloneNode(true)
        dt.querySelector('span').textContent =resposta
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        quizItem.querySelector('dl').appendChild(dt)

        dt.querySelector('input').onchange = (event) => {
            const correta = event.target.value == item.correta
            if(correta) {
                corretas.add(item)
            }
            motrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }



        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}