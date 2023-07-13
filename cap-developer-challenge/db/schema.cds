namespace golf;
using { User, cuid } from '@sap/cds/common';
type holePar : String enum { Third; Fourth; Fifth; }

entity Rounds : cuid {
  title  : String(111);
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : User      @cds.on.insert : $user;
  holes : Association to many Holes on holes.rounds = $self;
}

entity Holes : cuid {
  score : Integer;
  rounds: Association to Rounds;
  holesPar: holePar;
//  shots : Association to many Shots on shots.holes = $self;
  shots: Composition of many Shots on shots.holes = $self;
}

entity Shots : cuid {
  score : Integer;
  holes : Association to Holes;
}