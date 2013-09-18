<?php include('includes/header.inc.php'); ?>

<!-- Over the top of the game board -->
<div id="three">

</div>

<!-- the game board -->
<div class="game-board">

	<ul>
		<?php for($i = 0; $i < 5; $i ++) : ?>

			<li class="card">
				<a class="flip" href="#" title="card flip">
					<div class="front">
						This is card <?php echo $i; ?>
					</div>
					<div class="back">
						This is the back of card <?php echo $i; ?>
					</div>
				</a>
			</li>

		<?php endfor; ?>

	</ul>

</div>

<?php include('includes/footer.inc.php'); ?>
