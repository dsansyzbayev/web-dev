class NewsPaper {
    constructor(name){
        this.name = name;
    }

    publishNews(news){
        console.log(this.name + ' ' + news)
    }
}

class SportNewsObservable {
    constructor(){
        this.subscribers=[];
    }

    subscribe(sub) {
        this.subscribers.push(sub);
    }

    unsubscribe(exSub) {
        this.subscribers = this.subscribers.filter(sub => sub !== exSub);
    }
    
    notify(news) {
        this.subscribers.forEach(sub => sub.publishNews(news));
    }
}

const tengriNews = new NewsPaper('Tengrinews');
const newYorkTimes = new NewsPaper('newYorkTimes');
const zakonKz = new NewsPaper('zakonKz');

const sportInfo = new SportNewsObservable();

sportInfo.subscribe(tengriNews);
sportInfo.subscribe(newYorkTimes);
sportInfo.subscribe(zakonKz);

sportInfo.notify('Kobe died');

sportInfo.unsubscribe(zakonKz);

sportInfo.notify('Some news');