function adivinheAnimal() {
    console.log("Pense em um animal: cachorro, lobo, cobra, minhoca, caracol, urso, rato, tubarão, baleia e peixe.");

    let animal;
    const pergunta1 = prompt("O animal que você pensou tem patas? ");

    if (pergunta1.toLowerCase() === "sim") {
        const pergunta2 = prompt("O animal que você pensou é domesticado? ");

        if (pergunta2.toLowerCase() === "sim") {
            animal = "cachorro";
        } else {
            const pergunta3 = prompt("O animal que você pensou é carnívoro? ");

            if (pergunta3.toLowerCase() === "sim") {
                animal = "lobo";
            } else {
                const pergunta4 = prompt("O animal que você pensou é grande? ");

                if (pergunta4.toLowerCase() === "sim") {
                    animal = "urso";
                } else {
                    animal = "rato";
                }
            }
        }
    } else {
        const pergunta5 = prompt("O animal que você pensou tem escamas? ");

        if (pergunta5.toLowerCase() === "sim") {
            animal = "cobra";
        } else {
            const pergunta6 = prompt("O animal que você pensou tem concha? ");

            if (pergunta6.toLowerCase() === "sim") {
                animal = "caracol";
            } else {
                const pergunta7 = prompt("O animal que você pensou é uma minhoca? ");

                if (pergunta7.toLowerCase() === "sim") {
                    animal = "minhoca";
                } else {
                    const pergunta8 = prompt("O animal que você pensou é marítimo e tem dentes afiados? ");

                    if (pergunta8.toLowerCase() === "sim") {
                        animal = "tubarão";
                    } else {
                        const pergunta9 = prompt("O animal que você pensou é uma baleia? ");
                        
                        if (pergunta9.toLowerCase() === "sim") {
                            animal = "baleia";
                        } else {
                            animal = "peixe";
                        }
                    }
                }
            }
        }
    }

    alert(`O animal que você pensou é ${animal}.`);
}

adivinheAnimal();