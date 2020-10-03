function calc(){
	var mbti,ei,sn,tf,jp;
	var e=0,i=0,s=0,n=0,t=0,f=0,j=0,p=0;
	
	for (var k=1;k<4;k++){
		var a = $(':radio[name="q'+k+'"]:checked').val();
		if (!a){
			alert('모든 항목에 답변해주세요 :)');
			return false;
		} else{
			for (var m=0;m<a.length;m++){
				switch (a[m]) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
					case 'o': o++; break;
				}
			}
		}
	}
	
	ei = (e>i?'e':(e<i?'i':'o'));
	sn = (s>n?'s':(s<n?'n':'o'));
	tf = (t>f?'t':(t<f?'f':'o'));
	jp = (j>p?'j':(j<p?'p':'o'));
	
	mbti = ei+sn+tf+jp;
	compare(mbti);
}

function compare(a){
	var arr = [{ name:'배트맨', mbti:'intj' },
		{ name:'슈퍼맨', mbti:'enfo' },
		{ name:'원더 우먼', mbti:'entp' },
		{ name:'데미안 웨인', mbti:'isfp' },
		{ name:'사이보그', mbti:'estj' },
		{ name:'아쿠아맨', mbti:'enop' },
		{ name:'플래시', mbti:'eooo' },
		{ name:'그린 애로우', mbti:'isop' },
		{ name:'그린 랜턴', mbti:'enoo' },
		{ name:'배트걸', mbti:'eooj' },
		{ name:'블랙 카나리', mbti:'esfp' },
		{ name:'헌트리스', mbti:'isoo' },
		{ name:'호크맨', mbti:'inoj' },
		{ name:'호크걸', mbti:'isfo' },
		{ name:'나이트윙', mbti:'esoj' },
		{ name:'로어셰크', mbti:'intp' },
		{ name:'자타나', mbti:'infp' },
		{ name:'존 콘스탄틴', mbti:'esto' },
		{ name:'부스터 골드', mbti:'enfo' },
		{ name:'마샨 맨헌터', mbti:'iooj' },
		{ name:'조커', mbti:'ento' },
		{ name:'펀치라인', mbti:'enfj' },
		{ name:'루터', mbti:'estj' },
		{ name:'베인', mbti:'istj' },
		{ name:'블랙 만타', mbti:'osfj' },
		{ name:'치타', mbti:'osfp' },
		{ name:'사바', mbti:'isoj' },
		{ name:'투페이스', mbti:'oooo' },
		{ name:'할리 퀸', mbti:'enfp' },
		{ name:'로보', mbti:'estp' },
		{ name:'웃는 배트맨', mbti:'iotj' },
		{ name:'펭귄', mbti:'isfj' },
		{ name:'리들러', mbti:'infj' },
		{ name:'스케어크로우', mbti:'istp' },
		{ name:'포이즌 아이비', mbti:'inop' },
		{ name:'데드샷', mbti:'esfj' },
		{ name:'캡틴 콜드', mbti:'osoj' },
		{ name:'매드 해터', mbti:'onfo' },
		{ name:'라스 알 굴', mbti:'oooj' },
		{ name:'캣우먼', mbti:'esoo' }];
	
	var result;
	
	$.each(arr,function(idx,row){
		if(arr[idx].mbti==a){
			result = arr[idx].name;
		}
	});
	
	$('.qna').css('display','none');
	$('.res').css('display','block');
	
	if(result){
		$('.char').text('\"'+result+'\"');
	} else {
		$('.char').text('아직 정확히 일치하는 캐릭터가 입력되지 않았습니다!');
	}
		
	console.log(result);
}