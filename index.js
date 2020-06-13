const model = new NumberModel();
const element = new ElementObserver('elementObserver1');

model.addObserver(element);
model.notifyObservers();