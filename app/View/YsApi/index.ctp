<div class="jumbotron">
  <div class="container">
    <h1><?php echo $title_for_layout ?></h1>
    <p>下記フォームにキーワードを入力すると，関連する商品が表示されます．</p>

    <!-- 検索フォーム -->
    <p><?php
        echo $this->Form->create(null, array(
        	'id'=>'search_form',
        	'class'=>'form-inline',
        	'default'=>false
        	));
        echo $this->Form->input('query', array(
        	'label'=>false,
        	'type'=>'text',
        	'class'=>'form-control',
        	'size'=>'40',
        	'after' => '&nbsp;',
            'div' => array(
                'class' => 'form-group'
                )
        	));
        echo $this->Form->end(array(
        	'label'=>'検索',
        	'class'=>'submit btn btn-primary',
        	'div'=>false
        	));
    ?></p>
  </div>
</div>

<div class="container">
  <!-- 結果表示部 -->
  <div id="results"></div>
</div>