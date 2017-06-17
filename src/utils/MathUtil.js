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

MathUtil.getVectorAngle=function(vec1,vec2){
	return Math.acos((vec1.x*vec2.x+vec1.y*vec2.y)/Math.sqrt(vec1.x*vec1.x+vec1.y*vec1.y)/Math.sqrt(vec2.x*vec2.x+vec2.y*vec2.y))
}

MathUtil.getSmallAngle=function(angle){
	return angle<=Math.PI?angle:Math.PI*2-angle;
}

MathUtil.getVectorLen=function(vec){
	return Math.sqrt(vec.x*vec.x+vec.y*vec.y);
}

MathUtil.getVectorShadow=function(vec1,vec2){
	var vlen=MathUtil.getVectorLen(vec2);
	var v={};
	v.x=vec1.x*vec2.x/vlen;
	v.y=vec1.y*vec2.y/vlen;
	return v;
}