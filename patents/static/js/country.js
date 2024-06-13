
anychart.onDocumentReady(function () {
    var data = [
        { 'id': 'RU.NN', 'size': 75, 'name': 'Ненецкий автономный округ' },
        { 'id': 'RU.2485', 'size': 2, 'name': 'Чукотский автономный округ' },
        { 'id': 'RU.AR', 'size': 25, 'name': 'Архангельская область' },
        { 'id': 'RU.MS', 'size': 2563, 'name': 'Москва' },
        { 'id': 'RU.SP', 'size': 763, 'name': 'Санкт-Петербург' },
        { 'id': 'RU.ST', 'size': 3, 'name': 'Ставропольский край' },
        { 'id': 'RU.MM', 'size': 1, 'name': 'Мурманская область' },
        { 'id': 'RU.YN', 'size': 100, 'name': 'Ямало - немецкий округ' },
        { 'id': 'RU.KY', 'size': 4, 'name': 'Красноярский край' },
        { 'id': 'RU.VG', 'size': 7, 'name': 'Волгоградская область' },
        { 'id': 'RU.KN', 'size': 18, 'name': 'Калиниградская область' },
        { 'id': 'RU.RO', 'size': 200, 'name': 'Ростовская область' },
        { 'id': 'RU.TT', 'size': 9, 'name': 'Татарстан' },
        { 'id': 'RU.SR', 'size': 8, 'name': 'Саратовская область' },
        { 'id': 'RU.CL', 'size': 16, 'name': 'Челябинская област' },
        { 'id': 'RU.KO', 'size': 6, 'name': 'Республика Коми' },
        { 'id': 'RU.TY', 'size': 56, 'name': 'Тюменская область' },
        { 'id': 'RU.BK', 'size': 76, 'name': 'Башкортостан' },
        { 'id': 'RU.TO', 'size': 76, 'name': 'Томская область' },
        { 'id': 'RU.KM', 'size': 76, 'name': 'Ханты-Мансийский автономный окру' },
        { 'id': 'RU.PR', 'size': 76, 'name': 'Приморский край' },
    ];

    console.log(JSON.stringify(data));

    var map = anychart.map();

    map.geoData(anychart.maps.russia);

    map.unboundRegions().fill('rgb(172, 169, 182, 0.5)');
    map.unboundRegions().stroke('#fff');
    //create bubble series
    var series = map.bubble(data);
    map.zoom(1.25);


    // changes the fill and hoverFill colors
    series.fill("rgba(1, 84, 166, 0.25)");
    series.hovered().fill("rgba(1, 84, 166, 0.4)");
    series.labels().fontColor("#0277bd");
    series.hovered().labels().fontColor("#01579b");

    // changes the stroke and hoverStroke colors
    series.stroke("#0154a6");
    series.hovered().stroke("#81d4fa");

    // sets the select colors
    series.selected().stroke("#546e7a");
    series.selected().fill("#78909c");
    series.selected().labels().fontColor("#263238");



    // set the maximum size of the bubble
    map.maxBubbleSize('7%');

    // set the minimum size of the bubble
    map.minBubbleSize(10);

    series.labels(true);

    // set the text color
    series.labels().fontColor('black');
    series.labels().fontSize(10);

    series.labels().format("{%size}");
    series.labels().anchor('center');
    series.labels().position('center');

    series.tooltip().format("Патентов: {%size}");


    // Add click event listener to the series
    series.listen('pointClick', function (e) {
        var pointId = e.point.get('id');
        if (pointId === 'RU.MS') {
            window.location.href = 'region.html'; // замените на нужный URL
        }
    });

    map.container('container');
    map.draw();
});