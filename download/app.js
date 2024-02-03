document.addEventListener('DOMContentLoaded', function () {
    const downloadList = document.getElementById('download-list');
    const files = [
        { name: 'File 1', thumbnail: 'https://cdn.discordapp.com/attachments/1148256815897915422/1173244288570757131/16670416_xl.png?ex=65633fe4&is=6550cae4&hm=52c949ae030a1ed5c79a5d2687997410b67973e9309bc6fa34337223fe86beb3&', downloadLink: 'https://pika.rip/download/antirodpack' },
    ];
    function createDownloadCard(file) {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');
        const thumbnail = document.createElement('img');
        thumbnail.src = file.thumbnail;
        thumbnail.alt = `${file.name} Thumbnail`;
        thumbnail.classList.add('w-full', 'h-32', 'object-cover', 'mb-4');
        const fileName = document.createElement('h2');
        fileName.textContent = file.name;
        fileName.classList.add('text-lg', 'font-semibold', 'mb-2');
        const downloadButton = document.createElement('a');
        downloadButton.href = file.downloadLink;
        downloadButton.textContent = 'Download';
        downloadButton.classList.add('bg-blue-500', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-blue-600', 'cursor-pointer');
        card.appendChild(thumbnail);
        card.appendChild(fileName);
        card.appendChild(downloadButton);
        return card;
    }
    files.forEach(file => {
        const card = createDownloadCard(file);
        downloadList.appendChild(card);
    });
});
