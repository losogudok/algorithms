# Алгоритмы сортировки

###Вставкой
Время работы наилучшее O(n), наихудшее O(n<sup>2</sup>)

<img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif"/>

###Выборкой
Время работы наилучшее O(n), наихудшее O(n<sup>2</sup>)

<img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif"/>

###Слиянием
Время работы O(n * lgn)
Большой постоянный множитель. Делает полную копию входного массива.

<img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif"/>

В алгоритме используется принцип "Разделяй и властвуй". В нем задача разделяется на подзадачи, подобные исходной, 
решаем их рекурсивно, а затем объединяем решения подзадач в решение исходной задачи.

###Быстрая
Время работы наилучшее O(n * lgn), наихудшее O(n<sup>2</sup>)

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif"/>