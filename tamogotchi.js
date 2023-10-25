const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function(){
        let hunger = '';
        let stamina = '';
        let bored = '';
        if (this.meal == 0 || this.energy == 0 || this.mood == 0){
           return `${this.name} died :(`
        }
        if(this.meal < 3){
            hunger = "Я Голоден";
        }else{
            hunger = "Я не голоден"
        }

        if(this.energy < 3){
            stamina = "Я хочу спать";
        }else{
            stamina = "Я не хочу спать";
        }

        if(this.bored < 3){
            bored = "Мне скучно";
        }else{
            bored = "Мне весело";
        }
    return `имя: ${this.name}, еда: ${hunger} (${this.meal}), энергия: ${stamina} (${this.energy}), насроение: ${bored} (${this.mood})`
    },
    setName: function (name) {
        this.name = name;
    },
    eat: function(tamagotchi){
        if(this.meal < 5){
        this.meal += 1;
        }
        this.mood -= 1;
    
    },
    sleep: function(tamagotchi){
        if(this.energy < 5){
        this.energy += 1; 
        }
        this.meal -= 1;
    },
    play: function(tamagotchi){
        if(this.mood < 5){
        this.mood += 1;
        }
        this.energy -= 1;
        
    }
  }

tamogotchi.getStatus()
console.log(tamogotchi.getStatus());