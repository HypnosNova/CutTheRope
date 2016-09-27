/**
 * @author kozakluke@gmail.com
 */
MathUtil.RADIANS = Math.PI / 180;
MathUtil.DEGREES = 180 / Math.PI;

function MathUtil() { }

MathUtil.rndRange = function(min, max)
{
    return min + (Math.random() * (max - min));
}

MathUtil.rndIntRange = function(min, max)
{
    return Math.round(MathUtil.rndRange(min, max));
}

MathUtil.toRadians = function(degrees)
{
    return degrees * MathUtil.RADIANS;
}

MathUtil.toDegrees = function(radians)
{
    return radians * MathUtil.DEGREES;
}

MathUtil.hitTest = function(x1, y1, w1, h1,
                            x2, y2, w2, h2)
{
    if (x1 + w1 > x2)
        if (x1 < x2 + w2)
            if (y1 + h1 > y2)
                if (y1 < y2 + h2)
                    return true;

    return false;
}

MathUtil.getDistanceFromTwoPoint=function(pointA,pointB){
	return Math.sqrt((pointA.x-pointB.x)*(pointA.x-pointB.x)+(pointA.y-pointB.y)*(pointA.y-pointB.y))
}
