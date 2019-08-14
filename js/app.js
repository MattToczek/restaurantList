//1. Add a "featured" tag to the second item in the list:
  //  Append a new span element containing the word "Featured" to the list item
const $featureSpan = $('<span>Featured</span>');
const $liArray = $('li');
const $secondLi = $($liArray).eq(1);

$($secondLi.append($featureSpan));
  //  Add a class of "featured" to the new span element.
$($featureSpan.addClass('featured'));

//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list.
$($liArray.last().addClass('new'));

//3. Add an attribute to each link so that all anchor tags open in a new tab.
//4. Select and print the index and text of each anchor tag to the console
$('a').each(function(index){
  $(this).attr('target', '_blank');
  console.log(index, this);
});

//5. Refactor question #4 using the 'this' keyword.
