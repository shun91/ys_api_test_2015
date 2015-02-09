<h1><?php echo $title_for_layout ?></h1>
<p>下記フォームにキーワードを入力すると，関連する商品が表示されます．</p>

<!-- 検索フォーム -->
<?php
  echo $this->Form->create(null, array('id'=>'search_form', 'default'=>false));
  echo $this->Form->text('query');
  echo $this->Form->end("検索");
?>

<!-- 結果表示部 -->
<div id="results"></div>