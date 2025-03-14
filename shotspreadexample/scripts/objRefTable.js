const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.sliderbar,
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.sliderbar.Cnds.OnChanging,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.sliderbar.Exps.Value,
		C3.Plugins.sliderbar.Cnds.OnChanged,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.TextBox.Acts.AppendText
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{DragDrop: 0},
	{Sprite2: 0},
	{loc: 0},
	{Sprite3: 0},
	{sl_area: 0},
	{text: 0},
	{threshold: 0},
	{x0: 0},
	{y0: 0},
	{Sprite4: 0},
	{TextInput2: 0},
	{sl_samples: 0},
	{sl_gravity: 0},
	{torsohits: 0},
	{hits: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	sl_area: class extends self.ISliderBarInstance {},
	text: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	TextInput2: class extends self.ITextInputInstance {},
	sl_samples: class extends self.ISliderBarInstance {},
	sl_gravity: class extends self.ISliderBarInstance {}
}