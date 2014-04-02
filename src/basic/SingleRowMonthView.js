fcViews.singleRowMonth = SingleRowMonthView;

function SingleRowMonthView(element, calendar) {
	var t = this;


	// exports
	t.render = render;

	// imports
	BasicView.call(t, element, calendar, 'singleRowMonth');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;

	t.calendar.options.contentHeight = 58;
	t.calendar.options.isSingleRow = true;

	function render(date) {
		t.intervalStart = date.clone().stripTime().startOf('month');
		t.intervalEnd = t.intervalStart.clone().add('days', 31);

		t.start = t.intervalStart.clone().startOf('month');
		t.start = t.skipHiddenDays(t.start);

		t.end = t.intervalEnd.clone().add('days', (7 - t.intervalEnd.weekday()) % 7);
		t.end = t.skipHiddenDays(t.end, -1, true);

		t.title = calendar.formatDate(t.intervalStart, t.opt('titleFormat'));

		t.renderBasic(1, 31, true);
	}


}