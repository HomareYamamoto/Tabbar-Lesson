$('#tab-contents .tab[id != "tab1"]').hide();
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります。
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  // id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-menu .active").removeClass("active");
  // removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッドであるため今回はActiveクラスを削除
  $(this).addClass("active");
  // .addClass()は、任意のHTML要素にクラス属性を追加できるメソッドであるためctiveが追加対象のクラスとして指定されています。
  $($(this).attr("href")).show();
  // タブがクリックされたときに.attr()メソッドで取得したhref属性を表示するように記述
  event.preventDefault();
});