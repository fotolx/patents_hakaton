anychart.onDocumentReady(function () {

    fetch('/static/js/region.json')
        .then(response => response.json())
        .then(data => {

            const parsedData = data.map(region => ({
                id: region.id,
                size: Number(region.size),
                name: region['Регион']
            }));

            var map = anychart.map();
            map.geoData(anychart.maps.russia);

            map.unboundRegions().fill('rgb(172, 169, 182, 0.5)');
            map.unboundRegions().stroke('#fff');

            var series = map.bubble(parsedData);
            map.zoom(1.25);

            series.fill("rgba(1, 84, 166, 0.25)");
            series.hovered().fill("rgba(1, 84, 166, 0.4)");
            series.labels().fontColor("#0277bd");
            series.hovered().labels().fontColor("#01579b");

            series.stroke("#0154a6");
            series.hovered().stroke("#81d4fa");

            series.selected().stroke("#546e7a");
            series.selected().fill("#78909c");
            series.selected().labels().fontColor("#263238");

            map.maxBubbleSize('7%');
            map.minBubbleSize(10);

            series.labels(true);
            series.labels().fontColor('black');
            series.labels().fontSize(10);
            series.labels().format("{%size}");
            series.labels().anchor('center');
            series.labels().position('center');

            series.tooltip().format("Патентов: {%size}");

            series.listen('pointClick', function (e) {
                var pointId = e.point.get('id');
                if (pointId === 'RU.MS') {
                    window.location.href = '{% url "region" %}'; 
                }
            });

            map.container('container');
            map.draw();
        })
        .catch(error => console.error('Error JSON file:', error));
});
