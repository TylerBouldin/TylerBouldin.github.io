function drawScene() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const currentHour = new Date().getHours();
    let isNight = false;
    
    if (currentHour >= 18 || currentHour < 6) {
        isNight = true;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#C0C0C0';
        ctx.beginPath();
        ctx.arc(650, 80, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(665, 70, 25, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(650, 80, 30, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    for (let i = 0; i < 6; i++) {
        const cloudX = 50 + (i * 120);
        const cloudY = 50 + (Math.random() * 30);
        
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cloudX, cloudY, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloudX + 15, cloudY - 15, 25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloudX + 30, cloudY, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloudX + 15, cloudY + 10, 20, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    for (let i = 0; i < 6; i++) {
        const treeX = 100 + (i * 120);
        const treeY = 400;
        
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(treeX - 4, treeY + 50, 8, 30);
        
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.moveTo(treeX, treeY);
        ctx.lineTo(treeX - 20, treeY + 60);
        ctx.lineTo(treeX + 20, treeY + 60);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(treeX, treeY + 10);
        ctx.lineTo(treeX - 15, treeY + 45);
        ctx.lineTo(treeX + 15, treeY + 45);
        ctx.closePath();
        ctx.fill();
    }
    
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, 450, canvas.width, 150);
}
