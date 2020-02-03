# How to reuse state of one component in another component.

one way of doing it is using render props.
#hoc vs render props vs hooks
WithFlag(WithLang(ComponentA))
<WithFlag render={(flag) => <WithLang render={(lang) => <ComponentA flag={flag} lang={lang}>}>}>

#with children as renderProp
<WithFlag>
{
  (flag) => 
    <WithLang>
      {(lang) => <ComponentA flag={flag} lang={lang}>}
    </WithLang> 
}
</WithFlag>