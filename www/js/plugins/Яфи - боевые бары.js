ntains(id)) return;
        this._shownHpGauge.push(id);
};

Game_System.prototype.addMpGaugeEnemy = function(id) {
    if (this._shownHpGauge === undefined) this.initShownNpGauge();
        if (this._shownMpGauge.contains(id)) return;
        this._shownMpGauge.push(id);
};


//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.VHG.Game_BattlerBase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
  Yanfly.VHG.Game_BattlerBase_die.call(this);
  if (!this.isEnemy()) return;
  if (eval(Yanfly.Param.VHGDefeatFirst)) {
    if (!$gameSystem.showHpGaugeEnemy(this._enemyId)) this._noHpGauge = true;
  }
  $gameSystem.addHpGaugeEnemy(this._enemyId);
  $gameSystem.addMpGaugeEnemy(this._enemyId);
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.hpGaugeVisible = function() {
        if (this._noHpGauge) return false;
    if (this.isHidden()) return false;
        return true;
};

Game_Battler.prototype.mpGaugeVisible = function() {
    if (this.isHidden()) return false;
        return true;
};

Game_Battler.prototype.hpGaugeWidth = function() {
        var width = Math.max(this.spriteWidth(),    Yanfly.Param.VHGMinHpWidth);
        return (width & 1) ? width + 1 : width;
};

Game_Battler.prototype.mpGaugeWidth = function() {
    var width = Math.max(this.spriteWidth(),    Yanfly.Param.VHGMinHpWidth);
    return (width & 1) ? width + 1 : width;
};

Game_Battler.prototype.hpGaugeHeight = function() {
        return Yanfly.Param.VHGGaugeHeight;
};

Game_Battler.prototype.mpGaugeHeight = function() {
        return Yanfly.Param.VHGGaugeHeight;
};

Game_Battler.prototype.hpGaugeBackColor = function() {
        return Yanfly.Param.VHGBackColor;
};

Game_Battler.prototype.mpGaugeBackColor = function() {
        return Yanfly.Param.VHGBackColor;
};

Game_Battler.prototype.hpGaugeColor1 = function() {
    return Yanfly.Param.VHGHpColor1;
};

Game_Battler.prototype.hpGaugeColor2 = function() {
    return Yanfly.Param.VHGHpColor2;
};

Game_Battler.prototype.hpGaugeColor3 = function() {
    return Yanfly.Param.VHGHpColor3;
};

Game_Battler.prototype.hpGaugeColor4 = function() {
    return Yanfly.Param.VHGHpColor4;
};

Game_Battler.prototype.hpGaugeColor5 = function() {
    return Yanfly.Param.VHGHpColor5;
};

Game_Battler.prototype.hpGaugeColor6 = function() {
    return Yanfly.Param.VHGHpColor6;
};

Game_Battler.prototype.mpGaugeColor1 = function() {
    return Yanfly.Param.VHGMpColor1;
};

Game_Battler.prototype.mpGaugeColor2 = function() {
    return Yanfly.Param.VHGMpColor2;
};

Game_Battler.prototype.mpGaugeColor3 = function() {
    return Yanfly.Param.VHGMpColor3;
};

Game_Battler.prototype.mpGaugeColor4 = function() {
    return Yanfly.Param.VHGMpColor4;
};

Game_Battler.prototype.mpGaugeColor5 = function() {
    return Yanfly.Param.VHGMpColor5;
};

Game_Battler.prototype.mpGaugeColor6 = function() {
    return Yanfly.Param.VHGMpColor6;
};

};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.hpGaugeVisible = function() {
    if (this.isHidden()) return false;
        if (this.currentClass().showHpGauge) return true;
        if (!eval(Yanfly.Param.VHGDisplayActor)) return false;
        if (this.currentClass().hideHpGauge) return false;
        return Game_Battler.prototype.hpGaugeVisible.call(this);
};

Game_Actor.prototype.mpGaugeVisible = function() {
    if (this.isHidden()) return false;
        if (this.currentClass().showMpGauge) return true
        if (!eval(Yanfly.Param.VHGDisplayActor)) return false;
        if (this.currentClass().hideMpGauge) return false;
        return Game_Battler.prototype.mpGaugeVisible.call(this);
};

Game_Actor.prototype.hpGaugeWidth = function() {
        if (this.currentClass().hpGaugeWidth > 0) {
            var width = this.currentClass().hpGaugeWidth;
        } else {
            var width = this.spriteWidth();
        }
        width = Math.max(width,    Yanfly.Param.VHGMinHpWidth);
        return (width & 1) ? width + 1 : width;
};

Game_Actor.prototype.mpGaugeWidth = function() {
        if (this.currentClass().hpGaugeWidth > 0) {
            var width = this.currentClass().hpGaugeWidth;
        } else {
            var width = this.spriteWidth();
        }
        width = Math.max(width,    Yanfly.Param.VHGMinHpWidth);
        return (width & 1) ? width + 1 : width;
};

Game_Actor.prototype.hpGaugeHeight = function() {
        return this.currentClass().hpGaugeHeight;
};

Game_Actor.prototype.mpGaugeHeight = function() {
        return this.currentClass().hpGaugeHeight;
};

Game_Actor.prototype.hpGaugeBackColor = function() {
        return this.currentClass().hpGaugeBackColor;
};

Game_Actor.prototype.mpGaugeBackColor = function() {
        return this.currentClass().hpGaugeBackColor;
};

Game_Actor.prototype.hpGaugeColor1 = function() {
        return this.currentClass().hpGaugeColor1;
};

Game_Actor.prototype.hpGaugeColor2 = function() {
        return this.currentClass().hpGaugeColor2;
};

Game_Actor.prototype.hpGaugeColor3 = function() {
        return this.currentClass().hpGaugeColor3;
};

Game_Actor.prototype.hpGaugeColor4 = function() {
        return this.currentClass().hpGaugeColor4;
};

Game_Actor.prototype.hpGaugeColor5 = function() {
        return this.currentClass().hpGaugeColor5;
};

Game_Actor.prototype.hpGaugeColor6 = function() {
        return this.currentClass().hpGaugeColor6;
};

Game_Actor.prototype.mpGaugeColor1 = function() {
        return this.currentClass().mpGaugeColor1;
};

Game_Actor.prototype.mpGaugeColor2 = function() {
        return this.currentClass().mpGaugeColor2;
};

Game_Actor.prototype.mpGaugeColor3 = function() {
        return this.currentClass().mpGaugeColor3;
};

Game_Actor.prototype.mpGaugeColor4 = function() {
        return this.currentClass().mpGaugeColor4;
};

Game_Actor.prototype.mpGaugeColor5 = function() {
        return this.currentClass().mpGaugeColor5;
};

Game_Actor.prototype.mpGaugeColor6 = function() {
        return this.currentClass().mpGaugeColor6;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.hpGaugeVisible = function() {
    if (this.isHidden()) return false;
        if (this.enemy().hideHpGauge) return false;
    if (BattleManager.isBattleTest()) return true;
        if (this.enemy().showHpGauge) return true;
        if (!$gameSystem.showHpGaugeEnemy(this._enemyId)) return false;
        return Game_Battler.prototype.hpGaugeVisible.call(this);
};

Game_Enemy.prototype.mpGaugeVisible = function() {
    if (this.isHidden()) return false;
        if (this.enemy().hideMpGauge) return false;
    if (BattleManager.isBattleTest()) return true;
        if (this.enemy().showMpGauge) return true;
        return Game_Battler.prototype.mpGaugeVisible.call(this);
};

Yanfly.VHG.Game_Enemy_revive = Game_Enemy.prototype.revive;
Game_Enemy.prototype.revive = function() {
    if (this._hp === 0) this._noHpGauge = false;
    if (this._mp === 0) this._noMpGauge = false;
        Yanfly.VHG.Game_Enemy_revive.call(this);
};

Game_Enemy.prototype.hpGaugeWidth = function() {
        if (this.enemy().hpGaugeWidth > 0) {
            var width = this.enemy().hpGaugeWidth;
        } else {
            var width = this.spriteWidth();
        }
        width = Math.max(width,    Yanfly.Param.VHGMinHpWidth);
        return (width & 1) ? width + 1 : width;
};

Game_Enemy.prototype.mpGaugeWidth = function() {
        if (this.enemy().hpGaugeWidth > 0) {
            var width = this.enemy().hpGaugeWidth;
        } else {
            var width = this.spriteWidth();
        }
        width = Math.max(width,    Yanfly.Param.VHGMinHpWidth);
        return (width & 1) ? width + 1 : width;
};

Game_Enemy.prototype.hpGaugeHeight = function() {
        return this.enemy().hpGaugeHeight;
};

Game_Enemy.prototype.mpGaugeHeight = function() {
        return this.enemy().hpGaugeHeight;
};

Game_Enemy.prototype.hpGaugeBackColor = function() {
        return this.enemy().hpGaugeBackColor;
};

Game_Enemy.prototype.mpGaugeBackColor = function() {
        return this.enemy().hpGaugeBackColor;
};

Game_Enemy.prototype.hpGaugeColor1 = function() {
        return this.enemy().hpGaugeColor1;
};

Game_Enemy.prototype.hpGaugeColor2 = function() {
        return this.enemy().hpGaugeColor2;
};

Game_Enemy.prototype.hpGaugeColor3 = function() {
        return this.enemy().hpGaugeColor3;
};

Game_Enemy.prototype.hpGaugeColor4 = function() {
        return this.enemy().hpGaugeColor4;
};

Game_Enemy.prototype.hpGaugeColor5 = function() {
        return this.enemy().hpGaugeColor5;
};

Game_Enemy.prototype.hpGaugeColor6 = function() {
        return this.enemy().hpGaugeColor6;
};

Game_Enemy.prototype.mpGaugeColor1 = function() {
        return this.enemy().mpGaugeColor1;
};

Game_Enemy.prototype.mpGaugeColor2 = function() {
        return this.enemy().mpGaugeColor2;
};

Game_Enemy.prototype.mpGaugeColor3 = function() {
        return this.enemy().mpGaugeColor3;
};

Game_Enemy.prototype.mpGaugeColor4 = function() {
        return this.enemy().mpGaugeColor4;
};

Game_Enemy.prototype.mpGaugeColor5 = function() {
        return this.enemy().mpGaugeColor5;
};

Game_Enemy.prototype.mpGaugeColor6 = function() {
        return this.enemy().mpGaugeColor6;
};
//=============================================================================
// Sprite_Battler
//=============================================================================

Yanfly.VHG.Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function() {
    Yanfly.VHG.Sprite_Battler_update.call(this);
    this.createVisualHpGaugeWindow();
    this.createVisualMpGaugeWindow();
};

Sprite_Battler.prototype.createVisualHpGaugeWindow = function() {
        if (this._createdVisualHpGaugeWindow) return;
        if (!this._battler) return;
        if (this.checkVisualATBGauge()) {
            if (!this._visualATBWindow) return;
            if (!this.parent.parent.children.contains(this._visualATBWindow)) return;
        }
        this._createdVisualHpGaugeWindow = true;
    this._visualHpGauge = new Window_VisualHPGauge();
    this._visualHpGauge.setBattler(this._battler);
    this.parent.parent.addChild(this._visualHpGauge);
};

Sprite_Battler.prototype.createVisualMpGaugeWindow = function() {
        if (this._createdVisualMpGaugeWindow) return;
        if (!this._battler) return;
        if (this.checkVisualATBGauge()) {
            if (!this._visualATBWindow) return;
            if (!this.parent.parent.children.contains(this._visualATBWindow)) return;
        }
        this._createdVisualMpGaugeWindow = true;
    this._visualMpGauge = new Window_VisualMPGauge();
    this._visualMpGauge.setBattler(this._battler);
    this.parent.parent.addChild(this._visualMpGauge);
};

Sprite_Battler.prototype.checkVisualATBGauge = function() {
    if (!Imported.YEP_X_BattleSysATB) return false;
    if (!BattleManager.isATB()) return false;
    if (!Imported.YEP_X_VisualATBGauge) return false;
    return this._battler.isEnemy();
};

Yanfly.VHG.Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
Sprite_Battler.prototype.setBattler = function(battler) {
    Yanfly.VHG.Sprite_Battler_setBattler.call(this, battler);
    if (this._visualHpGauge) this._visualHpGauge.setBattler(battler);
    if (this._visualMpGauge) this._visualMpGauge.setBattler(battler);
};

//=============================================================================
// Window_VisualHPGauge
//=============================================================================

function Window_VisualHPGauge() {
    this.initialize.apply(this, arguments);
}

Window_VisualHPGauge.prototype = Object.create(Window_Base.prototype);
Window_VisualHPGauge.prototype.constructor = Window_VisualHPGauge;

Window_VisualHPGauge.prototype.initialize = function() {

    this._opacitySpeed = 255 / Yanfly.Param.VHGGaugeDuration;
    this._dropSpeed = 0;
    this._visibleCounter = 0;
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
    this._battler = null;
    this._requestRefresh = false;
    this._currentHpValue = 0;
    this._displayedValue = 0;
    this.contentsOpacity = 0;
    this.opacity = 0;
};

Window_VisualHPGauge.prototype.setBattler = function(battler) {
    if (this._battler === battler) return;
    this._battler = battler;
    this._currentHpValue = this._battler ? this._battler.hp : 0;
    this._displayedValue = this._battler ? this._battler.hp : 0;
    this._currentMhpValue = this._battler ? this._battler.mhp : 0;
    if (this._currentHpValue > this._currentMhpValue * 0.45) {
        colorofthebar = 0
    } else {

      if (this._currentHpValue > this._currentMhpValue * 0.2) {

        colorofthebar = 1
      } else {
        colorofthebar = 2
        }

    }

};

Window_VisualHPGauge.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (!this._battler) return;
    this.updateWindowAspects();
};

Window_VisualHPGauge.prototype.updateWindowAspects = function() {
    this.updateWindowSize();
    this.updateWindowPosition();
    this.updateOpacity();
    this.updateHpPosition();
    this.updateRefresh();
};

Window_VisualHPGauge.prototype.updateWindowSize = function() {
    var spriteWidth = this._battler.hpGaugeWidth();
    var width = spriteWidth + this.standardPadding() * 2;
    width = Math.min(width, Graphics.boxWidth + this.standardPadding() * 2);
    var height = Math.max(this.lineHeight(), this.gaugeHeight() + 4);
    height += this.standardPadding() * 2;
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.width += 10
    this.height = height;
    this.createContents();
    this._requestRefresh = true;
    this.makeWindowBoundaries();
};

Window_VisualHPGauge.prototype.makeWindowBoundaries = function() {
    if (!this._requestRefresh) return;
    this._minX = -1 * this.standardPadding();
    this._maxX = Graphics.boxWidth - this.width + this.standardPadding();
    this._minY = -1 * this.standardPadding();
    this._maxY = Graphics.boxHeight - this.height + this.standardPadding();
    this._maxY -= SceneManager._scene._statusWindow.height
    this._maxY += 8
};

Window_VisualHPGauge.prototype.updateWindowPosition = function() {
    if (!this._battler) return;
    var battler = this._battler;
    this.x = battler.spritePosX();
    this.x -= Math.ceil(this.width / 2);
    this.x = this.x.clamp(this._minX, this._maxX);
    this.x -=  8
    this.y = battler.spritePosY();
    if (Yanfly.Param.VHGGaugePos) {
      this.y -= battler.spriteHeight();
    } else {
      this.y -= this.standardPadding();
    }
    this.y = this.y.clamp(this._minY, this._maxY);
    this.y += Yanfly.Param.VHGBufferY;
};

Window_VisualHPGauge.prototype.updateOpacity = function() {
    if (this.isShowWindow()) {
      this.contentsOpacity += 32;
    } else {
      this.contentsOpacity -= 32;
    }
};

Window_VisualHPGauge.prototype.isShowWindow = function() {
    if (!this._battler.isAppeared()) return false;
    if (!this._battler.hpGaugeVisible()) return false;
    if (Yanfly.Param.VHGAlwaysShow && !this._battler.isDead()) return true;
    if (this._currentHpValue !== this._displayedValue) return true;
    if (this._battler.isSelected()) return true;
    --this._visibleCounter;
    return this._visibleCounter > 0;
};

Window_VisualHPGauge.prototype.updateHpPosition = function() {
    if (!this._battler) return;
    if (this._currentHpValue !== this._battler.hp) {
      this._visibleCounter = Yanfly.Param.VHGGaugeDuration;
      this._currentHpValue = this._battler.hp;
      var difference = Math.abs(this._displayedValue - this._battler.hp);
      this._dropSpeed = Math.ceil(difference / Yanfly.Param.VHGGaugeDuration);
    }
    this.updateDisplayCounter();
};

Window_VisualHPGauge.prototype.updateDisplayCounter = function() {
    if (this._battler._barrierAltered) {
      this._battler._barrierAltered = false;
    } else if (this._currentHpValue === this._displayedValue) {
      return;
    }
    var d = this._dropSpeed;
    var c = this._currentHpValue;
    if (this._displayedValue > this._currentHpValue) {
      this._displayedValue = Math.max(this._displayedValue - d, c);
    } else if (this._displayedValue < this._currentHpValue) {
      this._displayedValue = Math.min(this._displayedValue + d, c);
    }
    this._requestRefresh = true;
};

Window_VisualHPGauge.prototype.updateRefresh = function() {
    if (this._requestRefresh) this.refresh();
};

Window_VisualHPGauge.prototype.refresh = function() {
    this.contents.clear();
    if (!this._battler) return;
    this._requestRefresh = false;
    var wy = this.contents.height - this.lineHeight();
    var ww = this.contents.width - 10;
    this.drawActorHp(this._battler, 0, wy, ww);
};

Window_VisualHPGauge.prototype.gaugeBackColor = function() {
    return this.textColor(this._battler.hpGaugeBackColor());
};

Window_VisualHPGauge.prototype.hpGaugeColor1 = function() {
    return this.textColor(this._battler.hpGaugeColor1());
};

Window_VisualHPGauge.prototype.hpGaugeColor2 = function() {
    return this.textColor(this._battler.hpGaugeColor2());
};

Window_VisualHPGauge.prototype.hpGaugeColor3 = function() {
    return this.textColor(this._battler.hpGaugeColor3());
};

Window_VisualHPGauge.prototype.hpGaugeColor4 = function() {
    return this.textColor(this._battler.hpGaugeColor4());
};

Window_VisualHPGauge.prototype.hpGaugeColor5 = function() {
    return this.textColor(this._battler.hpGaugeColor5());
};

Window_VisualHPGauge.prototype.hpGaugeColor6 = function() {
    return this.textColor(this._battler.hpGaugeColor6());
};

Window_VisualHPGauge.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    if (this._displayedValue > actor.mhp * 0.2)  colorofthebar = 1;
    if (this._displayedValue > actor.mhp * 0.45) colorofthebar = 0;
    if (this._displayedValue <= actor.mhp * 0.2) colorofthebar = 2;

    if (colorofthebar == 0){
     var color1 = this.hpGaugeColor1();
     var color2 = this.hpGaugeColor2();
    }else {
      if (colorofthebar == 1){
       var color1 = this.hpGaugeColor3();
       var color2 = this.hpGaugeColor4();
    }else {
      var color1 = this.hpGaugeColor5();
      var color2 = this.hpGaugeColor6();
    }
   }

    var rate = this._displayedValue / actor.mhp;
    if (Imported.YEP_AbsorptionBarrier && actor.barrierPoints() > 0) {
      ww = this.drawBarrierGauge(actor, x, y, width);
    } else {
      this.drawGauge(x + 8, y, width, rate, color1, color2);
    }
    if (Yanfly.Param.VHGShowHP) {
      if (colorofthebar == 0) this.changeTextColor(this.textColor(24));
      if (colorofthebar == 1) this.changeTextColor(this.textColor(17));
      if (colorofthebar == 2) this.changeTextColor(this.textColor(18));
      if (this._displayedValue == 0) this.changeTextColor(this.textColor(7));
      this.drawText(TextManager.hpA, x, y, 44);
    }
    if (Yanfly.Param.VHGShowValue) {
      var val = this._displayedValue
      var max = actor.mhp;
      var w = width;
      if (colorofthebar == 0) var color = this.textColor(0);
      if (colorofthebar == 1) var color = this.textColor(17);
      if (colorofthebar == 2) var color = this.textColor(18);
      if (val == 0) var color = this.textColor(7)
      this.drawCurrentAndMax(val, max, x + 8, y, w, color, this.normalColor());
    }
};

Window_VisualHPGauge.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    if (Yanfly.Param.VHGShowMax) {
      Window_Base.prototype.drawCurrentAndMax.call(this, current, max,
        x, y, width, color1, color2);
    } else {
      var align = Yanfly.Param.VHGShowHP ? 'right' : 'center';
      var text = Yanfly.Util.toGroup(current);
      this.changeTextColor(color1);
      this.drawText(text, x, y, width, align);
    }
};

Window_VisualHPGauge.prototype.gaugeHeight = function() {
    if (!this._battler) return Window_Base.prototype.gaugeHeight.call(this);
    return this._battler.hpGaugeHeight();
};

if (Imported.YEP_CoreEngine && Yanfly.Param.VHGThick) {

Window_VisualHPGauge.prototype.drawGauge =
function(dx, dy, dw, rate, color1, color2) {
    var color3 = this.gaugeBackColor();
    var fillW = Math.floor(dw * rate).clamp(0, dw);
    var gaugeH = this.gaugeHeight();
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    if (eval(Yanfly.Param.GaugeOutline)) {
      color3.paintOpacity = this.translucentOpacity();
      this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
      dx += 2;
      gaugeY += 2;
      fillW = Math.max(0, fillW - 4);
      gaugeH -= 4;
    } else {
      var fillW = Math.floor(dw * rate);
      var gaugeY = dy + this.lineHeight() - gaugeH - 2;
      this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
    }
    this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

}

function Window_VisualMPGauge() {
    this.initialize.apply(this, arguments);
}

Window_VisualMPGauge.prototype = Object.create(Window_Base.prototype);
Window_VisualMPGauge.prototype.constructor = Window_VisualMPGauge;

Window_VisualMPGauge.prototype.initialize = function() {

    this._opacitySpeed = 255 / Yanfly.Param.VHGGaugeDuration;
    this._dropSpeed = 0;
    this._visibleCounter = 0;
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
    this._battler = null;
    this._requestRefresh = false;
    this._currentMpValue = 0;
    this._displayedValue = 0;
    this.contentsOpacity = 0;
    this.opacity = 0;
};

Window_VisualMPGauge.prototype.setBattler = function(battler) {
    if (this._battler === battler) return;
    this._battler = battler;
    this._currentMpValue = this._battler ? this._battler.mp : 0;
    this._displayedValue = this._battler ? this._battler.mp : 0;
    this._currentMmpValue = this._battler ? this._battler.mmp : 0;
    if (this._currentMpValue > this._currentMmpValue * 0.45) {
        colorofthebaro = 0
    } else {

      if (this._currentMpValue > this._currentMmpValue * 0.2) {

        colorofthebaro = 1
      } else {
        colorofthebaro = 2
        }

    }

};

Window_VisualMPGauge.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (!this._battler) return;
    this.updateWindowAspects();
};

Window_VisualMPGauge.prototype.updateWindowAspects = function() {
    this.updateWindowSize();
    this.updateWindowPosition();
    this.updateOpacity();
    this.updateMpPosition();
    this.updateRefresh();
};

Window_VisualMPGauge.prototype.updateWindowSize = function() {
    var spriteWidth = this._battler.mpGaugeWidth();
    var width = spriteWidth + this.standardPadding() * 2;
    width = Math.min(width, Graphics.boxWidth + this.standardPadding() * 2);
    var height = Math.max(this.lineHeight(), this.gaugeHeight() + 4);
    height += this.standardPadding() * 2;
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.width += 10
    this.height = height;
    this.height += 15
    this.createContents();
    this._requestRefresh = true;
    this.makeWindowBoundaries();
};

Window_VisualMPGauge.prototype.makeWindowBoundaries = function() {
    if (!this._requestRefresh) return;
    this._minX = -1 * this.standardPadding();
    this._maxX = Graphics.boxWidth - this.width + this.standardPadding();
    this._minY = -1 * this.standardPadding();
    this._maxY = Graphics.boxHeight - this.height + this.standardPadding();
    this._maxY -= SceneManager._scene._statusWindow.height;
};

Window_VisualMPGauge.prototype.updateWindowPosition = function() {
    if (!this._battler) return;
    var battler = this._battler;
    this.x = battler.spritePosX();
    this.x -= Math.ceil(this.width / 2);
    this.x = this.x.clamp(this._minX, this._maxX);
    this.x -= 8
    this.y = battler.spritePosY();
    if (Yanfly.Param.VHGGaugePos) {
      this.y -= battler.spriteHeight();
    } else {
      this.y -= this.standardPadding();
    }
    this.y = this.y.clamp(this._minY, this._maxY);
    this.y += Yanfly.Param.VHGBufferYz;
};

Window_VisualMPGauge.prototype.updateOpacity = function() {
    if (this.isShowWindow()) {
      this.contentsOpacity += 32;
    } else {
      this.contentsOpacity -= 32;
    }
};

Window_VisualMPGauge.prototype.isShowWindow = function() {
    if (!this._battler.isAppeared()) return false;
    if (!this._battler.mpGaugeVisible()) return false;
    if (Yanfly.Param.VHGAlwaysShow && !this._battler.isDead()) return true;
    if (this._currentMpValue !== this._displayedValue) return true;
    if (this._battler.isSelected()) return true;
    --this._visibleCounter;
    return this._visibleCounter > 0;
};

Window_VisualMPGauge.prototype.updateMpPosition = function() {
    if (!this._battler) return;
    if (this._currentMpValue !== this._battler.mp) {
      this._visibleCounter = Yanfly.Param.VHGGaugeDuration;
      this._currentMpValue = this._battler.mp;
      var difference = Math.abs(this._displayedValue - this._battler.mp);
      this._dropSpeed = Math.ceil(difference / Yanfly.Param.VHGGaugeDuration);
    }
    this.updateDisplayCounter();
};

Window_VisualMPGauge.prototype.updateDisplayCounter = function() {
    if (this._battler._barrierAltered) {
      this._battler._barrierAltered = false;
    } else if (this._currentMpValue === this._displayedValue) {
      return;
    }
    var d = this._dropSpeed;
    var c = this._currentMpValue;
    if (this._displayedValue > this._currentMpValue) {
      this._displayedValue = Math.max(this._displayedValue - d, c);
    } else if (this._displayedValue < this._currentMpValue) {
      this._displayedValue = Math.min(this._displayedValue + d, c);
    }
    this._requestRefresh = true;
};

Window_VisualMPGauge.prototype.updateRefresh = function() {
    if (this._requestRefresh) this.refresh();
};

Window_VisualMPGauge.prototype.refresh = function() {
    this.contents.clear();
    if (!this._battler) return;
    this._requestRefresh = false;
    var wy = this.contents.height - this.lineHeight() - 15;
    var ww = this.contents.width - 10;
    this.drawActorMp(this._battler, 0, wy, ww);
};

Window_VisualMPGauge.prototype.gaugeBackColor = function() {
    return this.textColor(this._battler.hpGaugeBackColor());
};

Window_VisualMPGauge.prototype.mpGaugeColor1 = function() {
    return this.textColor(this._battler.mpGaugeColor1());
};

Window_VisualMPGauge.prototype.mpGaugeColor2 = function() {
    return this.textColor(this._battler.mpGaugeColor2());
};

Window_VisualMPGauge.prototype.mpGaugeColor3 = function() {
    return this.textColor(this._battler.mpGaugeColor3());
};

Window_VisualMPGauge.prototype.mpGaugeColor4 = function() {
    return this.textColor(this._battler.mpGaugeColor4());
};

Window_VisualMPGauge.prototype.mpGaugeColor5 = function() {
    return this.textColor(this._battler.mpGaugeColor5());
};

Window_VisualMPGauge.prototype.mpGaugeColor6 = function() {
    return this.textColor(this._battler.mpGaugeColor6());
};

Window_VisualMPGauge.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    if (this._displayedValue > actor.mmp * 0.2)  colorofthebaro = 1;
    if (this._displayedValue > actor.mmp * 0.45) colorofthebaro = 0;
    if (this._displayedValue <= actor.mmp * 0.2) colorofthebaro = 2;
    if (colorofthebaro == 0){
     var color1 = this.textColor(23);
     var color2 = this.textColor(4);
    }else {
      if (colorofthebaro == 1){
        var color1 = this.textColor(1);
        var color2 = this.textColor(23);
    }else {
      var color1 = this.textColor(9);
      var color2 = this.textColor(1);
    }
   }

    var rate = this._displayedValue / actor.mmp;
    if (Imported.YEP_AbsorptionBarrier && actor.barrierPoints() > 0) {
      ww = this.drawBarrierGauge(actor, x, y, width);
    } else {
      this.drawGauge(x + 8, y, width, rate, color1, color2);
    }
    if (Yanfly.Param.VHGShowHP) {
      this.changeTextColor(this.textColor(4));
      this.drawText(TextManager.mpA, x, y + 16, 44);
    }
    if (Yanfly.Param.VHGShowValue) {
      if (!this._battler.isActor()) return
      var val = this._displayedValue
      var max = actor.mmp;
      var w = width;
      if (colorofthebaro == 0) var color = this.textColor(0);
      if (colorofthebaro == 1) var color = this.textColor(17);
      if (colorofthebaro == 2) var color = this.textColor(18);
      if (val == 0) var color = this.textColor(7)
      this.drawCurrentAndMax(val, max, x + 8, y + 16, w, color, this.normalColor());
    }
};

Window_VisualMPGauge.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    if (Yanfly.Param.VHGShowMax && this._battler.isActor()) {
      Window_Base.prototype.drawCurrentAndMax.call(this, current, max,
        x, y, width, color1, color2);
    } else {
      var align = Yanfly.Param.VHGShowHP ? 'right' : 'center';
      var text = Yanfly.Util.toGroup(current);
      this.changeTextColor(color1);
      this.drawText(text, x, y, width, align);
    }
};

Window_VisualMPGauge.prototype.gaugeHeight = function() {
    if (!this._battler) return Window_Base.prototype.gaugeHeight.call(this);
    return this._battler.hpGaugeHeight();
};

if (Imported.YEP_CoreEngine && Yanfly.Param.VHGThick) {

Window_VisualMPGauge.prototype.drawGauge =
function(dx, dy, dw, rate, color1, color2) {
    var color3 = this.gaugeBackColor();
    var fillW = Math.floor(dw * rate).clamp(0, dw);
    var gaugeH = this.gaugeHeight();
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    if (eval(Yanfly.Param.GaugeOutline)) {
      color3.paintOpacity = this.translucentOpacity();
      this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
      dx += 2;
      gaugeY += 2;
      fillW = Math.max(0, fillW - 4);
      gaugeH -= 4;
    } else {
      var fillW = Math.floor(dw * rate);
      var gaugeY = dy + this.lineHeight() - gaugeH - 2;
      this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
    }
    this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

} // Imported.YEP_CoreEngine

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {
    Yanfly.Util.toGroup = function(inVal) {
        return inVal;
    }
};

//=============================================================================
// End of File
//=============================================================================