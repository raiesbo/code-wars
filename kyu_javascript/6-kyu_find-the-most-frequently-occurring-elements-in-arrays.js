// Kyu_6 Find the most frequently occurring elements in arrays:

function getMostFrequent(json) {
	let elements = [];
  	let ctr = 0;
  	let repetitions = 1;
  	for (let i = 0; i < json.length; i++) {
	  	for (let y = 0; y < json[i].length; y++) {
	  		var element;
		    for (let j = y; j < json[i].length; j++) {
				if (json[i][y] == json[i][j]) {
					ctr++;
		      	}
		     	if (ctr > repetitions) {
		        	repetitions = ctr;
		        	element = json[i][y];
		      	}
		    elements.push(element);
		    }
	    ctr = 0;
	  	}
	};
  return element;
};


var forecast_01 = {
  "temperature": [
    [15,17,19,21,21,21,20,16],
    [16,17,22,22,22,22,20,16],
    [12,17,19,20,20,20,20,18],
    [14,15,19,19,20,22,18,17],
    [15,17,24,24,24,20,20,20]
  ]
}

//forecast_01.temperature[0];


getMostFrequent(forecast_01.temperature);














function getMostFrequent(json) {
	let element;
  	let ctr = 0;
  	let repetitions = 1;
	for (let y = 0; y < json.length; y++) {
		for (let j = y; j < json.length; j++) {
			if (json[y] == json[j]) {
				ctr++;
		    }
		    if (repetitions < ctr) {
		        repetitions = ctr;
		        element = json[y];
		    }
		}
		ctr = 0;

	}
  	return element;
};


var forecast_01 = {
  "temperature": [15,17,24,24,24,20,20,20],
}

getMostFrequent(forecast_01.temperature);

