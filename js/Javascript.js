        var canvas = document.getElementsByTagName("canvas")[0];
        var ctx = canvas.getContext("2d");
        var sky = document.getElementsByTagName('img')[0];
        var trees = document.getElementsByTagName('img')[1];
        var ps = document.getElementById("photoshop");
        var il = document.getElementById("illustrator");
        var sony = document.getElementById("sony");
        var toon = document.getElementById("toon");
        var ani = document.getElementById("animate");
        var blend = document.getElementById("blender");
        var osi = document.getElementById("osi");
        var java = document.getElementById("java");
        var js = document.getElementById("js");
        var html = document.getElementById("html");
        var css = document.getElementById("css");
        var move = 0,
            move2 = 0,
            move3 = 0,
            move4 = 0;
        var spriteSetW1 = 169.5,// limit parameter for walk sprite set 1
            sprite_Pose_Cut_Walk = 42.375,// width crop size
            sprite_Strt_Walk_Right = 0,
            SpriteUpdate = 0;
        animate();
        progress();
        function progress(){
            ps.style.width = 40+"0%";
            il.style.width = 10+"0%";
            sony.style.width = 25+"0%";
            blend.style.width = 15+"0%";
            ani.style.width = 70+"0%";
            toon.style.width = 50+"0%";
            osi.style.width = 45+"0%";

            java.style.width = 30+"0%";
            js.style.width = 30+"0%";
            html.style.width = 70+"0%";
            css.style.width = 35+"0%";

        }
        function animate(){
        	move+=.1;
        	move2+=.5;
            move3+=.7;
            move4+=1;
        	SpriteUpdate += 1;

        	if (move>sky.width) {move=0}
        		if (move2>trees.width) {move2=0}
                    if (move3>trees.width) {move3=0}
                        if (move4>trees.width) {move4=0}
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
            ctx.drawImage(sky, sky.width-move, 0)
            ctx.drawImage(sky, -move, 0)
            ctx.drawImage(trees, trees.width-move2, 4);
            ctx.drawImage(trees, -move2, 4);
            ctx.drawImage(trees, trees.width-move3, 2);
            ctx.drawImage(trees, -move3, 2);
            ctx.drawImage(trees, trees.width-move4, 0);
            ctx.drawImage(trees, -move4, 0);
            ctx.restore();
        requestAnimationFrame(animate);
        }