// 	массив в котором индекс - номер вершины, 
// 	а значение, это массив со смежными вершинами
// 	(тоесть ребра вершины направлены от вершины 
//	с индексом к вершинами, находящимся в массиве)

var testGraph = [[2],[3],[3,4],[5],[5],[6,10],[7],[12],[9],[10],[11],[12],[13],[null]];

function topologic_sort() {
	var inDegree = [],
		next = [],
		u,
		i = 0,
		topologySort = [];

	// Создаем массив с вершин
	for (i; i < testGraph.length; i++) {
		inDegree.push(0);
	}
	// Для каждой вершины u:
	//		для каждой вершины v, смежной с u,
	// 		увеличить inDegree[v] на 1

	testGraph.forEach(function(vershina){
		vershina.forEach(function(smeg_vershina){
			if (smeg_vershina in inDegree) {
				inDegree[smeg_vershina]++;
			}
		});
	});

	inDegree.forEach(function(item, index){
		if (item === 0) {
			next.push(index);
		}
	});

	while (next.length !== 0) {
		u = next.pop();
		topologySort.push(u);
		testGraph[u].forEach(function(vershina){
			--inDegree[vershina];
			if (inDegree[vershina] === 0) {
				next.push(vershina);
			}
		});
	}
	return topologySort;
}

console.log(topologic_sort(testGraph));