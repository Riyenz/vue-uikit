<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Date Range</h3>
    <Preview>
      <template slot="example">
        <Datepicker rangepicker />
        <Datepicker singleRangepicker />
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Datepicker rangepicker /&#x3E;
          &#x3C;Datepicker singleRangepicker /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-datepicker eduk-datepicker--auto&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-datepicker__range&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-input&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-input__flex&#x22;&#x3E;
                  &#x3C;div class=&#x22;eduk-input__icon&#x22;&#x3E;
                    &#x3C;input type=&#x22;text&#x22; placeholder=&#x22;mm/dd/yyyy&#x22; readonly=&#x22;readonly&#x22;
                      autocomplete=&#x22;off&#x22; class=&#x22;eduk-input__field eduk-input__field--pl&#x22;&#x3E;
                    &#x3C;span class=&#x22;fa-icon&#x22;&#x3E;
                      &#x3C;i class=&#x22;fas fa-calendar-alt&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-datepicker__separator&#x22;&#x3E;—&#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-input&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-input__flex&#x22;&#x3E;
                  &#x3C;div class=&#x22;eduk-input__icon&#x22;&#x3E;
                    &#x3C;input type=&#x22;text&#x22; placeholder=&#x22;mm/dd/yyyy&#x22; readonly=&#x22;readonly&#x22;
                      autocomplete=&#x22;off&#x22; class=&#x22;eduk-input__field eduk-input__field--pl&#x22;&#x3E;
                    &#x3C;span class=&#x22;fa-icon&#x22;&#x3E;
                      &#x3C;i class=&#x22;fas fa-calendar-alt&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-datepicker__calendar eduk-datepicker__calendar--visible&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-datepicker-calendar&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__header&#x22;&#x3E;
                  &#x3C;a class=&#x22;eduk-datepicker-calendar__arrow&#x22;&#x3E;
                    &#x3C;i class=&#x22;fas fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/a&#x3E;
                  &#x3C;a class=&#x22;eduk-datepicker-calendar__date&#x22;&#x3E;
                    October 2019 &#x3C;i class=&#x22;fas fa-caret-down&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/a&#x3E;
                  &#x3C;a class=&#x22;eduk-datepicker-calendar__arrow&#x22;&#x3E;
                    &#x3C;i class=&#x22;fas fa-chevron-right&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__weeks&#x22;&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Sun
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Mon
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Tue
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Wed
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Thu
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Fri
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                    eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                    Sat
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                    &#x3C;span&#x3E;29&#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                    &#x3C;span&#x3E;30&#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;5&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;6&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;7&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;8&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;9&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;10&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;11&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;12&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;13&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;14&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;15&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;16&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;17&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;18&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;19&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;20&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;21&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;22&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;23&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;24&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;25&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;26&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;27&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;28&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;29&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;30&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;31&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                    &#x3C;span&#x3E;1&#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                    &#x3C;span&#x3E;2&#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;

          &#x3C;div class=&#x22;eduk-datepicker eduk-datepicker--auto&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-input&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-input__flex&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-input__icon&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; readonly=&#x22;readonly&#x22; autocomplete=&#x22;off&#x22;
                  placeholder=&#x22;mm/dd/yyyy - mm/dd/yyyy&#x22; class=&#x22;eduk-input__field eduk-input__field--pl&#x22;&#x3E;
                &#x3C;span class=&#x22;fa-icon&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-calendar-alt&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-datepicker__calendar eduk-datepicker__calendar--visible&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-datepicker-calendar&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-datepicker-calendar__header&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-datepicker-calendar__arrow&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
                &#x3C;a class=&#x22;eduk-datepicker-calendar__date&#x22;&#x3E;
                  October 2019 &#x3C;i class=&#x22;fas fa-caret-down&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
                &#x3C;a class=&#x22;eduk-datepicker-calendar__arrow&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-chevron-right&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-datepicker-calendar__weeks&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Sun
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Mon
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Tue
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Wed
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Thu
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Fri
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day eduk-datepicker-calendar__day--gray
                  eduk-datepicker-calendar__day--disabled&#x22;&#x3E;
                  Sat
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                  &#x3C;span&#x3E;29&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                  &#x3C;span&#x3E;30&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;5&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;6&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;7&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;8&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;9&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;10&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;11&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;12&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;13&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;14&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;15&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;16&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;17&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;18&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;19&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;20&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;21&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;22&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;23&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;24&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;25&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;26&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;27&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;28&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;29&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;30&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day&#x22;&#x3E;&#x3C;span&#x3E;31&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                  &#x3C;span&#x3E;1&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-datepicker-calendar__day--gray eduk-datepicker-calendar__day&#x22;&#x3E;
                  &#x3C;span&#x3E;2&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Datepicker from '@/UIKit/Datepicker/Datepicker.component.vue';

export default {
  name: 'Range',
  components: {
    Preview,
    Datepicker,
  },
};
</script>
